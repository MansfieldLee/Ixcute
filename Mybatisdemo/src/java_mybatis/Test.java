package java_mybatis;

import java.io.IOException;
import java.io.Reader;
import java.util.Scanner;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class Test {
	public static login SelectbyID(int id){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			String statement = "java_mybatis.loginMapper.selectloginbyid";
			login log = se.selectOne(statement,id);
			return log;
//			System.out.println(log);
		}catch(IOException e){
			e.printStackTrace();
			return null;
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}finally{
			if(se!=null) se.close();
		}

	}
	
	public static void Insertuser(login log){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			String statement = "java_mybatis.loginMapper."+"addUser";
			int count = se.insert(statement,log);
			System.out.println("成功增加"+count+"条数据");
			se.commit();
//			System.out.println(log);
		}catch(IOException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			if(se!=null) se.close();
		}
	}
	
	public static void deleteUserbyID(int id){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			
			String statement = "java_mybatis.loginMapper."+"deleteUserbyid";
			int count = se.delete(statement,id);
			se.commit();
			System.out.println("删除"+count+"个用户");
		}catch(IOException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			if(se!=null) se.close();
		}

	}
	
	public static void updatePWD(login log){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			
			String statement = "java_mybatis.loginMapper."+"updatepwd";
			se.update(statement, log);
			se.commit();
			
		}catch(IOException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			if(se!=null) se.close();
		}

	}
	
	public static void main(String[] args){
//		System.out.println("请输入需要查找的id");
//		Scanner s = new Scanner(System.in);
//		int id = s.nextInt();
//		login log = SelectbyID(id);
//		System.out.println(log);
		
//		login log = new login(3,"ww","52146","client");
//		Insertuser(log);
		
	}
}
