from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Book, Review, Favorite
from database.schemas import book_schema, books_schema, review_schema, reviews_schema, favorite_schema, favorites_schema

class AllBookResource(Resource):
    def get(self):
        books = Book.query.all()
        title = request.args.get('title')
        if title:
            books = Book.query.filter_by(title=title)
        return books_schema.dump(books), 200
    
class UserBookResource(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_books = Book.query.filter_by(user_id=user_id)
        return books_schema.dump(user_books), 200
    
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_book = book_schema.load(form_data)
        new_book.user_id = user_id
        db.session.add(new_book)
        db.session.commit()
        return book_schema.dump(new_book), 201

class UserReviews(Resource):
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_review = review_schema.load(form_data)
        new_review.user_id = user_id
        db.session.add(new_review)
        db.session.commit()
        return review_schema.dump(new_review), 201

class UserFavorites(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_favorites = Favorite.query.filter_by(user_id=user_id)
        return favorites_schema.dump(user_favorites), 200

    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_favorite = favorite_schema.load(form_data)
        new_favorite.user_id = user_id
        db.session.add(new_favorite)
        db.session.commit()
        return favorite_schema.dump(new_favorite), 201


# (10 points): As a developer, I want to create a GetBookInformation Resource with a get() method that does the following things: 
# Accepts a value from the request’s URL (The book_id of the Book I am trying to get Details for). 
# Responds with a custom response dictionary that contains:
#  all Reviews from the database that are related to the book_id sent in the URL. 
# An average of all user ratings.
# A true/false property as to whether the logged-in user has favorited this book.
# Returns a 200 status code.

class GetBookInformation(Resource):
    @jwt_required()
    def get (self, book_id):
        user_id = get_jwt_identity()
        book_info = Book.query.get_or_404(book_id)

        reviews = []
        ratings = []
        is_favorited = False

        for review in book_info:
            reviews.append(review.text)
            ratings.append(review.rating)

        if len(ratings) > 0:
            average_rating = sum(ratings) / len(ratings)
        else:
            average_rating = "N/A"

        favorite = Favorite.query.filter_by(user_id=user_id, book_id=book_id) 
        if favorite:
            is_favorited = True

        custom_response = {
            "reviews": reviews,
            "average_rating": average_rating,
            "favorited": is_favorited
        }
        return custom_response, 200


