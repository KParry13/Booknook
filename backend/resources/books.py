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

class GetBookInformation(Resource):
    # def get (self):
    #     custom_response = {}
    #     book_info = Book.query.get_or_404()
    #     custom_response["reviews"] = book_schema.dump(book_info)
    #     custom_response["avg_ratings"] = 
    pass