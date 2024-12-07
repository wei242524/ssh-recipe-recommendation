from flask import Flask
from .database import db
from .routes import routes  # 引入 routes Blueprint

def create_app():
    app = Flask(__name__)

    # 配置 SQLite 數據庫
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # 初始化數據庫
    db.init_app(app)

    # 註冊 routes Blueprint，並設置 url_prefix 為 /api
    app.register_blueprint(routes, url_prefix='/api')

    return app
