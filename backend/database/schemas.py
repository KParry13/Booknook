from flask_marshmallow import Marshmallow
from marshmallow import post_load, fields
from database.models import User, Car, Book, Review, Favorite

ma = Marshmallow()

# Auth Schemas
class RegisterSchema(ma.Schema):
    """
    Schema used for registration, includes password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    password = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    class Meta:
        fields = ("id", "username",  "password", "first_name", "last_name", "email")

    @post_load
    def create_user(self, data, **kwargs):
        return User(**data)
    
class UserSchema(ma.Schema):
    """
    Schema used for displaying users, does NOT include password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    class Meta:
        fields = ("id", "username", "first_name", "last_name", "email",)

register_schema = RegisterSchema()
user_schema = UserSchema()
users_schema = UserSchema(many=True)


# Car Schemas
class CarSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    make = fields.String(required=True)
    model = fields.String(required=True)
    year = fields.Integer()
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "make", "model", "year", "user_id", "user")
    
    @post_load
    def create_car(self, data, **kwargs):
        return Car(**data)

car_schema = CarSchema()
cars_schema = CarSchema(many=True)


# TODO: Add your schemas below
class BookSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    title = fields.String(required=True)
    author = fields.String(required=True)
    year = fields.Integer()
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "title", "author", "year", "user_id", "user")

    @post_load
    def create_book(self, data, **kwargs):
        return Book(**data)
    
book_schema = BookSchema()
books_schema = BookSchema(many=True)

class ReviewSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    book_id = fields.String(required=True)
    text = fields.String(required=True)
    rating = fields.Integer(required=True)
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "book_id", "text", "rating", "user_id", "user")

    @post_load
    def create_review(self, data, **kwargs):
        return Review(**data)
    
review_schema = ReviewSchema()
reviews_schema = ReviewSchema(many=True)

class FavoriteSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    book_id = fields.String(required=True)
    title = fields.String(required=True)
    thumbnail_url = fields.Text()
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "book_id", "title", "thumbnail_url", "user_id", "user")

    @post_load
    def create_favorite(self, data, **kwargs):
        return Favorite(**data)
    
favorite_schema = FavoriteSchema()
favorites_schema = FavoriteSchema(many=True)    

