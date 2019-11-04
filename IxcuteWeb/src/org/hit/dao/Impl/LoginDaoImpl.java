package org.hit.dao.Impl;


import org.apache.ibatis.session.SqlSession;
import org.hit.entity.User;
import org.hit.mapper.LoginMapper;
import org.mybatis.spring.support.SqlSessionDaoSupport;


public class LoginDaoImpl extends SqlSessionDaoSupport implements LoginMapper {

	public void addUser(User user) {
		SqlSession session = super.getSqlSession();
		LoginMapper userDao = session.getMapper(LoginMapper.class);
		userDao.addUser(user);
	}
	
	

}
