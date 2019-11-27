package org.hit.mapper;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hit.entity.Livelihood_data;


public interface LivelihoodMapper {
	
	List<Livelihood_data> EveProBytime(String create_time);
	List<Livelihood_data> EveProBetween(Map<String,Object> map);
	List<HashMap<String,Object>> EveProBetween1(Map<String,Object> map);//
	List<HashMap<String,Object>> EveProBetween2(Map<String,Object> map);//
	List<HashMap<String,Object>> StreetBymon(Map<String, String> input);//
	List<HashMap<String,Object>> Streettoday(HashMap<String,String> map);//


	List<Livelihood_data> SelectBymon(String month);
	List<Livelihood_data> SelectAll();
	List<Livelihood_data> SelectByQuarter(int Quarter);
	List<Livelihood_data> TimeBetween(Map<String,Object> map);

//	List<HashMap<String,Object>> EveProBytime1(String create_time); 
//	List<HashMap<String,Object>> EveProBetween1(HashMap<String,Object> map);
}
