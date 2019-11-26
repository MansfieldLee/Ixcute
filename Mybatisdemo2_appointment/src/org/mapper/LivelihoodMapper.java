package org.mapper;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import java_mybatis.Livelihood_data;
import java_mybatis.login;

public interface LivelihoodMapper {
	
	List<Livelihood_data> EveProBytime(String create_time);
	List<Livelihood_data> EveProBetween(HashMap<String,Object> map);
	List<Livelihood_data> SelectBymon(String month);
	List<Livelihood_data> SelectAll();
	List<Livelihood_data> SelectByQuarter(int Quarter);
	List<Livelihood_data> TimeBetween(HashMap<String,Object> map);
	
//	List<HashMap<String,Object>> EveProBytime1(String create_time);
//	List<HashMap<String,Object>> EveProBetween1(HashMap<String,Object> map);
}
