package org.hit.service.Impl;

import java.text.SimpleDateFormat;
import java.util.Date;
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
		List<Livelihood_data> list = livelihoodMapper.TimeBetween(map);
		result.clear();
		String properties = "";
		result = InitProperties();
		for(Livelihood_data data:list) {
			System.out.println(data);
			System.out.println(data.getCreate_time());
			properties = data.getEvent_property_name();
			if(result.containsKey(properties)) {
				result.put(properties,result.get(properties) + 1);
			}else if(properties==null) {
				System.out.println("�ҵ����ַ���"+data);
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
				System.out.println("�ҵ����ַ���"+data);
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
				System.out.println("�ҵ����ַ���"+data);
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
				kind = "���ڽ��";
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
				kind = "���ڽ��";
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
				kind = "������";
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
		Map map2 = ans.get("������");
		map2.put("����",to_Intime);
		map2 = ans.get("���ڽ��");
		map2.put("����", Intime);
		map2 = ans.get("���ڽ��");
		map2.put("����", overTime);
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
				kind = "���ڽ��";
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
				kind = "���ڽ��";
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
				kind = "������";
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
		Map map2 = ans.get("������");
		map2.put("����",to_Intime);
		map2 = ans.get("���ڽ��");
		map2.put("����", Intime);
		map2 = ans.get("���ڽ��");
		map2.put("����", overTime);
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
				kind = "���ڽ��";
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
				kind = "���ڽ��";
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
				kind = "������";
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
		Map map2 = ans.get("������");
		map2.put("����",to_Intime);
		map2 = ans.get("���ڽ��");
		map2.put("����", Intime);
		map2 = ans.get("���ڽ��");
		map2.put("����", overTime);
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
				System.out.println("�ҵ����ַ���"+data);
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
			if(data.getEvent_type_name().equals("��������")) {
				option = 1;
			}
			//regex match
			if(data.getEvent_type_name().matches("(.*)Υ��(.*)")) {
				option = 1;
			}
			if(data.getSub_type_name().matches("(.*)ɫ��(.*)")) {
				option = 1;
			}
			specialEvent.put(count, putData(data,option));
			count++;
			}
		}
		
		return specialEvent;
	}
	
	private Map<String, Integer> InitProperties(){
		result.put("Ͷ��", 0);
		result.put("��ѯ",0);
		result.put("����",0);
		result.put("��л",0);
		result.put("���",0);
		return result;
	}
	
	private void InitStreet(){
		Map<String,Integer> map = new HashMap<String, Integer>();
		ans.put("ƺɽ�ֵ�", map);
		map = new HashMap<String, Integer>();
		ans.put("�����ֵ�", map);
		map = new HashMap<String, Integer>();
		ans.put("���ͽֵ�", map);
		map = new HashMap<String, Integer>();
		ans.put("����ֵ�", map);
		map = new HashMap<String, Integer>();
		ans.put("����ֵ�", map);
		map = new HashMap<String, Integer>();
		ans.put("ʯ���ֵ�", map);
	}

	private void InitProblem() {
		Map<String,Integer> map = new HashMap<String, Integer>();
		ans.put("���ڽ��", map);
		map = new HashMap<String, Integer>();
		ans.put("���ڽ��", map);
		map = new HashMap<String, Integer>();
		ans.put("������", map);

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
		map.put("ʱ��", createTime);
		map.put("�ֵ�", street);
		map.put("����", community);
		map.put("��Դ", source);
		map.put("С������", subType);
		map.put("����", property);
		map.put("���ò���", disposal);
		map.put("�¼�����",option);
		System.out.println(map);
		return map;
	}
	
	
}
