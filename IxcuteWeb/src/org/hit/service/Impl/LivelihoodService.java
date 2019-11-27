package org.hit.service.Impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.hit.entity.Livelihood_data;
import org.hit.mapper.LivelihoodMapper;
import org.hit.service.ILivelihoodService;
import org.springframework.stereotype.Service;

@Service
public class LivelihoodService implements ILivelihoodService {
	
	
	private LivelihoodMapper livelihoodMapper;
	
	private Map<String,Integer> result;
	
	private Map<String,Map<String,Integer>> ans;
	
	private Map<Integer,Map<String,String>> specialEvent;
	
	public Map<String, Map<String, Integer>> getAns() {
		return ans;
	}

	public void setAns(Map<String, Map<String, Integer>> ans) {
		this.ans = ans;
	}

	public Map<Integer, Map<String, String>> getSpecialEvent() {
		return specialEvent;
	}

	public LivelihoodService() {
		
	}
	

	public void setSpecialEvent(Map<Integer,Map<String,String>> specialEvent) {
		this.specialEvent = specialEvent;
	}
	
	public Map<String, Integer> getResult() {
		return result;
	}
	
	public void setResult(Map<String, Integer> result) {
		this.result = result;
	}

	public void setLivelihoodMapper(LivelihoodMapper livelihoodMapper) {
		this.livelihoodMapper = livelihoodMapper;
	}

	public LivelihoodMapper getLivelihoodMapper() {
		return livelihoodMapper;
	}

	//problem properties
	public Map<String,Integer> queryDataPropertiesByDate(Map map) {
		
		result.clear();
		result = InitProperties();
		for(HashMap<String, Object> properties:livelihoodMapper.EveProBetween1(map)) {
			String name = (String) properties.get("EVENT_PROPERTY");
			if(name.equals("notknown"))continue;
			String count = properties.get("count").toString();
			int num = Integer.parseInt(count);
			result.put(name,num);
		}
		return result;
	}
	//problem properties today
	public Map<String,Integer> queryDataPropertieToday(Map map) {
		result.clear();
		result = InitProperties();
		for(HashMap<String, Object> properties:livelihoodMapper.EveProBetween2(map)) {
			System.out.println(properties);
			String name = (String) properties.get("EVENT_PROPERTY");
			if(name.equals("notknown"))continue;
			String count = properties.get("count").toString();
			int num = Integer.parseInt(count);
			result.put(name,num);
		}
		return result;
	}

	//streetByMonth
	public Map<String, Map<String, Integer>> queryStreetDataByMonth(String month) {
		Map<String,String> input = new HashMap<String, String>();
		if(Integer.parseInt(month)<10) {
			month = "0"+month;
		}
		InitStreet();
		input.put("month", month);
		List<HashMap<String, Object>> list = null;
		Set<String> keySet = ans.keySet();
		for(Iterator<String> it = keySet.iterator();it.hasNext();) {
			String streetName = it.next();
			input.put("street", streetName);
			list = livelihoodMapper.StreetBymon(input);
			System.out.println(list);
			Map<String,Integer> second = ans.get(streetName);
		for(HashMap<String, Object> out:list) {
			String main_type_name = (String) out.get("SUB_TYPE_NAME");
			if(main_type_name.equals("notknown"))continue;
			String count = out.get("count").toString();
			int num = Integer.parseInt(count);
			second.put(main_type_name, num);
			}
		}
		return ans;
	}
	
	//streetToday
	public Map<String, Map<String, Integer>> queryStreetDataToday(Map today) {
		Map<String,String> input = new HashMap<String, String>();
		
		InitStreet();
		input.put("begin_time", (String) today.get("begin_time"));
		input.put("end_time", (String) today.get("end_time"));
		List<HashMap<String, Object>> list = null;
		Set<String> keySet = ans.keySet();
		for(Iterator<String> it = keySet.iterator();it.hasNext();) {
			String streetName = it.next();
			input.put("street", streetName);
			list = livelihoodMapper.Streettoday((HashMap<String, String>) input);
			System.out.println(list);
			Map<String,Integer> second = ans.get(streetName);
		for(HashMap<String, Object> out:list) {
			String main_type_name = (String) out.get("SUB_TYPE_NAME");
			if(main_type_name.equals("notknown"))continue;
			String count = out.get("count").toString();
			int num = Integer.parseInt(count);
			second.put(main_type_name, num);
			}
		}
		return ans;
	}
	
	
	//hot community
	public Map<String,Integer> queryCommunityByMonth(String month){
		List<Livelihood_data> list = livelihoodMapper.SelectBymon(month);
		result.clear();
		String community = "";
		for(Livelihood_data data:list) {
			community = data.getCommunity_name();
			if(result.containsKey(community)) {
				result.put(community,result.get(community) + 1);
			}else if(community==null) {
				System.out.println("找到空字符串"+data);
			}
			else {
				result.put(community, 1);
			}
			
		}
		return result;
	}

	public Map<String,Integer> queryCommunityToday(Map today){
		List<Livelihood_data> list = livelihoodMapper.TimeBetween(today);
		ans.clear();
		String community = "";
		for(Livelihood_data data:list) {
			community = data.getCommunity_name();
			if(result.containsKey(community)) {
				result.put(community,result.get(community) + 1);
			}else if(community==null) {
				System.out.println("找到空字符串"+data);
			}
			else {
				result.put(community, 1);
			}
			
		}
		return result;
	}
	
	//by kind of problem
	public Map<String, Map<String,Integer>> queryKindByMonth(String month){
		List<Livelihood_data> list = livelihoodMapper.SelectBymon(month);
		ans.clear();
		InitProblem();
		String kind = "";
		int overTime = 0;
		int Intime = 0;
		int to_Intime = 0;
		String mainType = "";
		for(Livelihood_data data:list) {
			System.out.println(data);
			if(data.getOvertime_archive_num() == 1) {
				kind = "超期结办";
				overTime++;
				mainType = data.getEvent_type_name();
				Map<String,Integer> map1 = ans.get(kind);
				if(map1.containsKey(mainType))
				{
					map1.put(mainType, map1.get(mainType)+ 1);
				}else
				{
					map1.put(mainType, 1);
				}
			
			}else if(data.getIntime_archive_num() == 1) {
				kind = "按期结办";
				Intime++;
				mainType = data.getEvent_type_name();
				Map<String,Integer> map1 = ans.get(kind);
				if(map1.containsKey(mainType))
				{
					map1.put(mainType, map1.get(mainType)+ 1);
				}else
				{
					map1.put(mainType, 1);
				}
				
			}else if(data.getIntime_to_archive_num() == 1) {
				kind = "处置中";
				to_Intime++;
				mainType = data.getEvent_type_name();
				Map<String,Integer> map1 = ans.get(kind);
				if(map1.containsKey(mainType))
				{
					map1.put(mainType, map1.get(mainType)+ 1);
				}else
				{
					map1.put(mainType, 1);
				}
				}
		
		}
		Map map2 = ans.get("处置中");
		map2.put("总量",to_Intime);
		map2 = ans.get("按期结办");
		map2.put("总量", Intime);
		map2 = ans.get("超期结办");
		map2.put("总量", overTime);
		return ans;
		
	}
	
		
	public Map<String, Map<String, Integer>> queryKindByQ(int q){
		List<Livelihood_data> list = livelihoodMapper.SelectByQuarter(q);
		ans.clear();
		InitProblem();
		String kind = "";
		int overTime = 0;
		int Intime = 0;
		int to_Intime = 0;
		String mainType = "";
		for(Livelihood_data data:list) {
			System.out.println(data);
			if(data.getOvertime_archive_num() == 1) {
				kind = "超期结办";
				overTime++;
				mainType = data.getEvent_type_name();
				
				Map<String,Integer> map1 = ans.get(kind);
				if(map1.containsKey(mainType))
				{
					map1.put(mainType, map1.get(mainType)+ 1);
				}else
				{
					map1.put(mainType, 1);
				}
				
			}else if(data.getIntime_archive_num() == 1) {
				kind = "按期结办";
				Intime++;
			
				mainType = data.getEvent_type_name();
				
				Map<String,Integer> map1 = ans.get(kind);
				if(map1.containsKey(mainType))
				{
					map1.put(mainType, map1.get(mainType)+ 1);
				}else
				{
					map1.put(mainType, 1);
				}
				
				
			}else if(data.getIntime_to_archive_num() == 1) {
				kind = "处置中";
				to_Intime++;
				mainType = data.getEvent_type_name();

				Map<String,Integer> map1 = ans.get(kind);
				if(map1.containsKey(mainType))
				{
					map1.put(mainType, map1.get(mainType)+ 1);
				}else
				{
					map1.put(mainType, 1);
				}
				
			}
		}
		Map map2 = ans.get("处置中");
		map2.put("总量",to_Intime);
		map2 = ans.get("按期结办");
		map2.put("总量", Intime);
		map2 = ans.get("超期结办");
		map2.put("总量", overTime);
		return ans;
	}
			
	public Map<String, Map<String, Integer>> queryKindByToday(Map map){
		List<Livelihood_data> list = livelihoodMapper.TimeBetween(map);
		ans.clear();
		InitProblem();
		String kind = "";
		int overTime = 0;
		int Intime = 0;
		int to_Intime = 0;
		String mainType = "";
		for(Livelihood_data data:list) {
			if(data.getOvertime_archive_num() == 1) {
				kind = "超期结办";
				overTime++;
				mainType = data.getEvent_type_name();
				
				Map<String,Integer> map1 = ans.get(kind);
				if(map1.containsKey(mainType))
				{
					map1.put(mainType, map1.get(mainType)+ 1);
				}else
				{
					map1.put(mainType, 1);
				}
				
			}else if(data.getIntime_archive_num() == 1) {
				kind = "按期结办";
				Intime++;
				mainType = data.getEvent_type_name();
				Map<String,Integer> map1 = ans.get(kind);
				if(map1.containsKey(mainType))
				{
					map1.put(mainType, map1.get(mainType)+ 1);
				}else
				{
					map1.put(mainType, 1);
				}
			}else if(data.getIntime_to_archive_num() == 1) {
				kind = "处置中";
				to_Intime++;
				mainType = data.getEvent_type_name();
				Map<String,Integer> map1 = ans.get(kind);
				if(map1.containsKey(mainType))
				{
					map1.put(mainType, map1.get(mainType)+ 1);
				}else
				{
					map1.put(mainType, 1);
				}
		}
		}
		Map map2 = ans.get("处置中");
		map2.put("总量",to_Intime);
		map2 = ans.get("按期结办");
		map2.put("总量", Intime);
		map2 = ans.get("超期结办");
		map2.put("总量", overTime);
		return ans;
	}
	
	public Map<String,Integer> StatisticByall(Map map){
		result.clear();
		List<Livelihood_data> list = livelihoodMapper.EveProBetween(map);
		String mainType = "";
		for(Livelihood_data data:list) {
			mainType = data.getEvent_type_name();
			if(result.containsKey(mainType)) {
				result.put(mainType,result.get(mainType) + 1);
			}else if(mainType==null) {
				System.out.println("找到空字符串"+data);
			}
			else {
				result.put(mainType, 1);
			}
		}
		return result;
	}
	
	//no deal 
	public Map<Integer,Map<String,String>> queryNoDeal(Map map){
		List<Livelihood_data> list = livelihoodMapper.TimeBetween(map);
		
		specialEvent.clear();
		int condition = 0;
		String createTime = "";
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		int count = 1;
		int option = 0;
		for(Livelihood_data data:list) {
			option = 0;
			condition = data.getIntime_to_archive_num();
			if(condition == 1) {
				System.out.println(condition);
				createTime = data.getCreate_time();
				long diff = 0L;
				try {
					Date date1 = format.parse(createTime);
					Date date2 = format.parse((String) map.get("end_time"));
					diff = date2.getTime() - date1.getTime();
					//one day ago
					if(diff / (1000 * 24 * 60 * 60) > 1) {
						option = 1;
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			if(data.getEvent_type_name().equals("党纪政纪")) {
				option = 1;
			}
			//regex match
			if(data.getEvent_type_name().matches("(.*)违法(.*)")) {
				option = 1;
			}
			if(data.getMain_type_name().matches("(.*)违法(.*)")) {
				option = 1;
			}
			if(data.getSub_type_name().matches("(.*)色情(.*)")) {
				option = 1;
			}
			specialEvent.put(count, putData(data,option));
			count++;
			}
		}
		return specialEvent;
	}
	
	private Map<String, Integer> InitProperties(){
		result.put("投诉", 0);
		result.put("咨询",0);
		result.put("建议",0);
		result.put("感谢",0);
		result.put("求决",0);
		return result;
	}
	
	private void InitStreet(){
		Map<String,Integer> map = new HashMap<String, Integer>();
		ans.put("坪山街道", map);
		map = new HashMap<String, Integer>();
		ans.put("坑梓街道", map);
		map = new HashMap<String, Integer>();
		ans.put("马峦街道", map);
		map = new HashMap<String, Integer>();
		ans.put("碧岭街道", map);
		map = new HashMap<String, Integer>();
		ans.put("龙田街道", map);
		map = new HashMap<String, Integer>();
		ans.put("石井街道", map);
	}

	private void InitProblem() {
		Map<String,Integer> map = new HashMap<String, Integer>();
		ans.put("超期结办", map);
		map = new HashMap<String, Integer>();
		ans.put("按期结办", map);
		map = new HashMap<String, Integer>();
		ans.put("处置中", map);

	}
	

	//optional to choose abnormal(0) or alarm(1)
	private Map<String,String> putData(Livelihood_data data,int optional) {
		Map<String,String> map = new HashMap<String, String>();
		String createTime = data.getCreate_time();
		String street = data.getStreet_name();
		String community = data.getCommunity_name();
		String source = data.getEvent_src_name();
		String subType = data.getSub_type_name();
		String property = data.getEvent_property_name();
		String disposal = data.getDispose_unit_name();
		String option;
		if(optional == 0) {
			option = "abnormal";
		}else {
			option = "warning";
		}
		map.put("时间", createTime);
		map.put("街道", street);
		map.put("社区", community);
		map.put("来源", source);
		map.put("小类名称", subType);
		map.put("性质", property);
		map.put("处置部门", disposal);
		map.put("事件类型",option);
		System.out.println(map);
		return map;
	}
	
	
}
