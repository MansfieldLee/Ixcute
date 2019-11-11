package org.mapper;

import java.util.HashMap;
import java.util.List;

import java_mybatis.login;

public interface loginMapper {
	
	login selectloginbyid(int id);
	void addUser(login log);
	login selectloginbyname(String username);
	int selectloginbynameAndpwd(login log);
	List<login> selectloginOrderbycol(String colname);
	int findNameExist(String username);
	void deleteUserbyid(int id);
	void deleteUserbyname(String username);
	void updatepwd(login log);
	
	List<login> PageDiv(int pagenum);
	int Totalcount();
}
 