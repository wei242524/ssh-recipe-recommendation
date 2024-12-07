from flask import Blueprint, request, jsonify
from datetime import datetime
from .models import db, Ingredient

# 創建 Blueprint
routes = Blueprint('routes', __name__)

# 測試 API
@routes.route('/test', methods=['GET'])
def test_route():
    return jsonify({"message": "API is working!"}), 200

# 獲取所有原料
@routes.route('/ingredients', methods=['GET'])
def get_ingredients():
    try:
        ingredients = Ingredient.query.all()
        return jsonify([
            {
                "id": i.id,
                "name": i.name,
                "expiration_date": i.expiration_date.strftime('%Y-%m-%d'),
                "quantity": i.quantity
            }
            for i in ingredients
        ]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 添加新原料
@routes.route('/ingredients', methods=['POST'])
def add_ingredient():
    try:
        # 獲取 JSON 數據
        data = request.get_json()
        
        # 創建新原料對象
        new_ingredient = Ingredient(
            name=data['name'],
            expiration_date=datetime.strptime(data['expiration_date'], '%Y-%m-%d').date(),
            quantity=data['quantity']
        )
        
        # 保存到數據庫
        db.session.add(new_ingredient)
        db.session.commit()
        
        return jsonify({"message": "Ingredient added successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
