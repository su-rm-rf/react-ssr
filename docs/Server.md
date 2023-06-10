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

# 数据库
MySQL建表时，默认engine是InnoDB，默认charset是latin1
  1.手动指定 engine=InnoDB default charset=utf8
  2.创建数据库时指定的character，就是建表时的charset默认值
    create database xxx default character set utf8;
  3.修改mysql全局配置文件

# 表之间的关系
一对一，一对多，多对多

# 表字段
type(len) 类型和长度
unsigned 无符号，将数字类型无符号化

# 约束
primary key 主键约束
unique 唯一约束
not null 非空字段
auto_increment 自增
comment '' 评论
foreign key 外键约束

  主键约束不能为null，唯一约束可以为null
  主键约束只能有1个，唯一约束可以有多个


添加主键约束
  primary key (id);

添加外键约束
  列级约束: 字段名 类型 约束
  表级约束: [constraint 约束名] 约束类型 (字段名)

  建表时
    列级 foreign key references pdb(pid);
    表级 [constraint fkn] foreign key (fid) references pdb(pid);
  修改表结构
    列级 alter table tb2 modify col2 type(len) foreign key references pdb(pid);
    表级 alter table tb2 add constraint fkn foreign key (fid) references pdb(pid);

删除外键约束
  alter table tbn drop foreign key fkn;

查询从表的约束关系
  show index from dbn;

  https://blog.csdn.net/qq_44027353/article/details/121235561

# 级联操作
cascade 主表的某一行的外键字段修改或删除了，从表也跟着修改或删除

在外键约束时，添加级联删除（建表时，或alter添加）
  ... on delete cascade on update no action;

查询主表的级联关系
  select * from referential_constraints where 
    constraint_schema=dbn 
    and referenced_table_name=tbn 
    and delete_rule='CASCADE';

# 更改表字段
alter table tb5 add/modify/drop col2 int(25) not null auto_increment comment 'zzz' after col1;
alter table tb2 add constraint fkn foreign key (fid) references pdb(pid);

有外键约束的表，如何删除主表或从表的外键约束的字段


  https://www.likecs.com/show-308488494.html

# 插入数据
主键/非主键自增
  先定义为auto_increment，再插入values(null, ...)

有外键约束的表，如何插入/删除记录
  插入：先插入主表数据，再插入从表数据（包含外键字段）
  删除：先删除从表数据，再删除从表数据

# 多表查询
join
left join
right join

# 删除数据
delete 删除记录，插入新记录时，自增主键继续，而非从1开始

truncate 重构了表，插入新记录时，自增主键从1开始，和一个新建的表一样
  外键约束无法truncate
    解决办法：先把与主表有外键约束的关联表都进行“结构+数据”转储，并删除drop这些表，再将关联表都“运行SQL”重新导入

从多个表中删除数据
  delete from tb1, tb2 where tb1.col2 = tb2.col1;

# 索引
MySQL默认从第一条记录开始读完整张表，表越大查询效率越低
索引，用于快速找出在某一列中有某个特定值的行

普通索引
  index idxn (col)
  alter table tbn add index idxn on (col(len));

唯一索引
  索引列的值必须唯一，允许有null，如果是组合索引，列值的组合必须唯一
  alter table tbn add unique idxn on (col);
  全文索引 alter table tbn add fulltext (col);
  组合索引 alter table tbn add index idxn (col1, col2, ...); 

创建
  key idx (col)
  add index(col)
删除 
查询 


# Node
自动扩缩容
容灾
