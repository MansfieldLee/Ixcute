package org.hit.service.Impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hit.entity.Livelihood_data;
import org.hit.mapper.LivelihoodMapper;
import org.hit.service.ILivelihoodService;
import org.springframework.stereotype.Service;

@Service
public class LivelihoodService implements ILivelihoodService {
	
	
	private LivelihoodMapper livelihoodMapper;
	
	private Map<String,Integer> result;
	
	private Map<String,Map<String,Integer>> ans;
	
	public Map<String, Map<String, Integer>> getAns() {
		return ans;
	}

	public void setAns(Map<String, Map<String, Integer>> ans) {
		this.ans = ans;
	}

	public LivelihoodService() {
		
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
		List<Livelihood_data> list = livelihoodMapper.EveProBetween(map);
		result.clear();
		String properties = "";
		result = InitProperties();
		for(Livelihood_data data:list) {
			properties = data.getEvent_property_name();
			if(result.containsKey(properties)) {
				result.put(properties,result.get(properties) + 1);
			}else if(properties==null) {
				System.out.println("找到空字符串"+data);
			}
			else {
				result.put(properties, 1);
			}
		}
		return result;
	}

	//streetByMonth
	public Map<String, Map<String, Integer>> queryStreetDataByMonth(String month) {
		List<Livelihood_data> list = livelihoodMapper.SelectBymon(month);
		ans.clear();
		InitStreet();
		Map<String,Integer> map;
		String streetName = "";
		String main_type_name = "";
		for(Livelihood_data data:list) {
			streetName = data.getStreet_name();
			if(streetName==null)continue;
			if(!ans.containsKey(streetName)) {
				map = new HashMap<String, Integer>();
				main_type_name = data.getMain_type_name();
				if(main_type_name!=null) {
				map.put(main_type_name, 1);
				}
				ans.put(streetName, map);
				
			}else
			{
				main_type_name = data.getMain_type_name();
				if(streetName!=null) {
					if(ans.containsKey(streetName)) {
						map = ans.get(streetName);
						
					    //exist type name;
						if(map.containsKey(main_type_name)) {
							map.put(main_type_name, map.get(main_type_name)+1);
						}else if(main_type_name!=null){//not exist
							map.put(main_type_name, 1);
						}
					}else {
						map = new HashMap<String, Integer>();
						ans.put(streetName, map);
						
					}
				}
			}
			
		}
		return ans;
	}
	
	//streetToday
	public Map<String, Map<String, Integer>> queryStreetDataToday(Map today) {
		List<Livelihood_data> list = livelihoodMapper.TimeBetween(today);
		ans.clear();
		InitStreet();
		Map<String,Integer> map;
		String streetName = "";
		String main_type_name = "";
		for(Livelihood_data data:list) {
			System.out.println(data);
			streetName = data.getStreet_name();
			if(streetName==null)continue;
			if(!ans.containsKey(streetName)) {
				map = new HashMap<String, Integer>();
				main_type_name = data.getMain_type_name();
				if(main_type_name!=null) {
				map.put(main_type_name, 1);
				}
				ans.put(streetName, map);
				
			}else
			{
				main_type_name = data.getMain_type_name();
				if(streetName!=null) {
					if(ans.containsKey(streetName)) {
						map = ans.get(streetName);
						
					    //exist type name;
						if(map.containsKey(main_type_name)) {
							map.put(main_type_name, map.get(main_type_name)+1);
						}else if(main_type_name!=null){//not exist
							map.put(main_type_name, 1);
						}
					}else {
						map = new HashMap<String, Integer>();
						ans.put(streetName, map);
						
					}
				}
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
	public Map<String, Integer> queryKindByMonth(String month){
		List<Livelihood_data> list = livelihoodMapper.SelectBymon(month);
		result.clear();
		String kind;
		for(Livelihood_data data:list) {
			if(data.getOvertime_archive_num() == 1) {
				kind = "超期结办";
				if(result.containsKey(kind)) {
					result.put(kind, result.get(kind)+1);
				}else {
					result.put(kind, 1);
				}
			}else if(data.getIntime_archive_num() == 1) {
				kind = "按期结办";
				if(result.containsKey(kind)) {
					result.put(kind, result.get(kind)+1);
				}else {
					result.put(kind, 1);
				}
			}else if(data.getIntime_to_archive_num() == 1) {
				kind = "处置中";
				if(result.containsKey(kind)) {
					result.put(kind, result.get(kind)+1);
				}else {
					result.put(kind, 1);
				}
			}
		}
		return result;
	}
	
	public Map<String,Integer> Statistic(Map map){
		result.clear();
		List<Livelihood_data> list = livelihoodMapper.EveProBetween(map);
		InitStreet();
		String properties = "";
		for(Livelihood_data data:list) {
			properties = data.getMain_type_name();
			if(result.containsKey(properties)) {
				result.put(properties,result.get(properties) + 1);
			}else if(properties==null) {
				System.out.println("找到空字符串"+data);
			}
			else {
				result.put(properties, 1);
			}
		}
		return result;
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

}
