from app import create_app
from app.database import db

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # 如果數據表不存在，則創建表
    app.run(debug=True)