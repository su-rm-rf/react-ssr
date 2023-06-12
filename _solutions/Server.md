# 表结构
Category_1 (
  id int,
  name: varchar,
  primary key (id)
)
Category_2 (
  id int,
  name: varchar,
  1_id int,
  primary key (id),
  constraint fkn foreign key (1_id) references Category_1 (id)
)

# dotenv配置全局变量
键值对，值只能是字符串类型

# MySQL数据库连接池
连接池：为了防止有大量请求同时对数据库进行访问，是一组预先分配的数据库连接，可以大幅提高响应速度

数据库连接次数过多

  const pool = mysql.createPool(config)
  pool.query(sql, params, (err, res, fields)=>{})

事务
  pool.getConnection()
    connect.begineTransaction
      connect.query(SQL)
        connect.rollback()
        connect.commit()
    connect.release()



