package java_mybatis;

import java.io.IOException;
import java.io.Reader;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.mapper.LivelihoodMapper;
import org.mapper.loginMapper;

public class Test {
	public static login SelectbyID(int id){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			loginMapper loginmapper = se.getMapper(loginMapper.class);
			login log = loginmapper.selectloginbyid(id);
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
	
	public static int CheckNameAndPwd(login log){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			loginMapper loginmapper = se.getMapper(loginMapper.class);
			
			login log_find = loginmapper.selectloginbyname(log.getUsername());
			String find_pwd = log_find.getUserpwd();
			System.out.println("数据库中密码:"+find_pwd);
			MD5salt.queriedHash = find_pwd;
			String saltpwd = MD5salt.Get_MD5salt(log.getUserpwd(),0);
			System.out.println("新密码:"+saltpwd);
			if(saltpwd.equals(find_pwd)){
				return 1;
			}else return 0;
//			System.out.println(log);
		}catch(IOException e){
			e.printStackTrace();
			return -1;
		}catch(Exception e){
			e.printStackTrace();
			return -1;
		}finally{
			if(se!=null) se.close();
		}
	}
	
	public static void loginOrderbycol(){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			loginMapper loginmapper = se.getMapper(loginMapper.class);
			String colname = "id";
			List<login> logs = loginmapper.selectloginOrderbycol(colname);			
			System.out.println(logs);
		}catch(IOException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
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
			loginMapper loginmapper = se.getMapper(loginMapper.class);
			
			loginmapper.addUser(log);
			System.out.println("成功增加数据");
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
			
			loginMapper loginmapper = se.getMapper(loginMapper.class);
			loginmapper.deleteUserbyid(id);
			se.commit();
			System.out.println("删除用户");
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
			loginMapper loginmapper = se.getMapper(loginMapper.class);
			loginmapper.updatepwd(log);
			se.commit();
			
		}catch(IOException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			if(se!=null) se.close();
		}

	}
	
	public static void pageDivide(){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			loginMapper loginmapper = se.getMapper(loginMapper.class);
			
			int pagenum = 2;
//			HashMap<String,Object> map = new HashMap<>();
//			map.put("pagenum1",2);
//			map.put("pagenum2",2);
			
			List<login> logs = loginmapper.PageDiv(pagenum);			
			System.out.println(logs);
		}catch(IOException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			if(se!=null) se.close();
		}
	}
	
	public static void Eventproperty(){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			
			LivelihoodMapper livelihoodmapper = se.getMapper(LivelihoodMapper.class);
			
			String create_time = "2018-10-31";
			List<Livelihood_data> result = livelihoodmapper.EveProBytime(create_time);

			System.out.println(result);
		}catch(IOException e){
			e.printStackTrace();

		}catch(Exception e){
			e.printStackTrace();

		}finally{
			if(se!=null) se.close();
		}
	}
	
	public static void EventpropertyBetween(){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			
			LivelihoodMapper livelihoodmapper = se.getMapper(LivelihoodMapper.class);
			
			HashMap<String,Object> map = new HashMap<>();
			map.put("begin_time","2018-10-20");
			map.put("end_time","2018-10-31");
			
			List<Livelihood_data> result = livelihoodmapper.EveProBetween(map);

			System.out.println(result);
		}catch(IOException e){
			e.printStackTrace();

		}catch(Exception e){
			e.printStackTrace();

		}finally{
			if(se!=null) se.close();
		}
	}
	
	public static void SelectQuarter(){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			
			LivelihoodMapper livelihoodmapper = se.getMapper(LivelihoodMapper.class);
			
			int quarter = 3;
			List<Livelihood_data> result = livelihoodmapper.SelectByQuarter(quarter);

			System.out.println(result);
		}catch(IOException e){
			e.printStackTrace();

		}catch(Exception e){
			e.printStackTrace();

		}finally{
			if(se!=null) se.close();
		}
	}
	
	public static void test(){
		Reader reader=null;
		SqlSessionFactory session=null;
		SqlSession se = null;
		try{
			reader = Resources.getResourceAsReader("conf.xml");
			session = new SqlSessionFactoryBuilder().build(reader);
			se = session.openSession();
			
			LivelihoodMapper livelihoodmapper = se.getMapper(LivelihoodMapper.class);
			
			int quarter = 3;
			String day = "2018-10-30";
			HashMap<String,Object> map = new HashMap<>();
			map.put("begin_time","2018-10-20");
			map.put("end_time","2018-10-31");
			
			List<HashMap<String,Object>> result = livelihoodmapper.InGroupBetween(map);

			System.out.println(result);
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
		
//		loginOrderbycol();
		
//		login log = new login(7,"kakao","etrd6546123","client");
//		String saltpwd = MD5salt.Get_MD5salt(log.getUserpwd(),0);
//		log.setUserpwd(saltpwd);
//		Insertuser(log);
		
//		int find = CheckNameAndPwd(log);
//		System.out.println(find);
		
//		Eventproperty();
//		EventpropertyBetween();
//		SelectQuarter();
//		pageDivide();
//		updatePWD(log);
		test();
	}
}
