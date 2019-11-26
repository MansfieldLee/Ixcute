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
	List<HashMap<String,Object>> EveProBytime1(String create_time);
	List<HashMap<String,Object>> EveProBetween1(HashMap<String,Object> map);
	List<HashMap<String,Object>> StreetBymon(HashMap<String,Object> map);
	List<HashMap<String,Object>> Streettoday(HashMap<String,Object> map);
	List<HashMap<String,Object>> hotCommuByDay(String day);
	List<HashMap<String,Object>> hotCommuByMon(String mon);
	int OvertimeBymon(String month);
	int OvertimeByQuarter(String quarter);
	int OvertimeBetween(HashMap<String,Object> map);
	int IntimetoBymon(String month);
	int IntimetoByQuarter(String quarter);
	int IntimetoBetween(HashMap<String,Object> map);
	int IntimeBymon(String month);
	int IntimeByQuarter(String quarter);
	int IntimeBetween(HashMap<String,Object> map);
	List<HashMap<String,Object>> OverGroupBymon(String month);
	List<HashMap<String,Object>> OverGroupByQuarter(String quarter);
	List<HashMap<String,Object>> OverGroupBetween(HashMap<String,Object> map);
	List<HashMap<String,Object>> InGrouptoBymon(String month);
	List<HashMap<String,Object>> InGrouptoByQuarter(String quarter);
	List<HashMap<String,Object>> InGrouptoBetween(HashMap<String,Object> map);
	List<HashMap<String,Object>> InGroupBymon(String month);
	List<HashMap<String,Object>> InGroupByQuarter(String quarter);
	List<HashMap<String,Object>> InGroupBetween(HashMap<String,Object> map);

	

}
