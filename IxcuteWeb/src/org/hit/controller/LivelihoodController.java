package org.hit.controller;

import java.util.HashMap;
import java.util.Map;

import org.hit.mapper.LoginMapper;
import org.hit.service.Impl.LivelihoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class LivelihoodController {

	
	@Autowired
	private LivelihoodService livelihoodService;
	
	
	@RequestMapping(value="/DataProperties")
	@ResponseBody
	public Map<String, Integer> dataProperties(@RequestParam("year1") String beginYear,@RequestParam("month1") String beginMonth,@RequestParam("day1") String beginDay,
			@RequestParam("year") String endYear,@RequestParam("month") String endMonth,@RequestParam("day") String endDay) {
		
		Map<String,String> map = new HashMap<String, String>();
		String begin_time  = beginYear+"-"+beginMonth+"-"+beginDay;
		String end_time = endYear+"-"+endMonth+"-"+endDay;
		//String end_time = "2018-12.30";
		System.out.println("begin_time:"+begin_time);
		System.out.println("end_time"+end_time);
		map.put("begin_time",begin_time);
		map.put("end_time",end_time);
		Map<String, Integer> result = livelihoodService.queryDataPropertiesByDate(map);
		System.out.println("\n");
		System.out.println(result);
		return result;
	}
	
	@RequestMapping(value="/DataPropertiesToday")
	@ResponseBody
	public Map<String, Integer> dataPropertiesToday(@RequestParam("year") String year,@RequestParam("month") String month,
			@RequestParam("day") String day,@RequestParam("hour") String hour,@RequestParam("minute") String minute,@RequestParam("second")String second) {
		
		Map<String,String> map = new HashMap<String, String>();
		String begin_time = getTime(year, month, day, "0", "0", "0");
		String end_time = getTime(year,month,day,hour,minute,day);
		System.out.println("begin_time:"+begin_time);
		System.out.println("end_time"+end_time);
		map.put("begin_time",begin_time);
		map.put("end_time",end_time);
		Map<String, Integer> result = livelihoodService.queryDataPropertieToday(map);
		System.out.println("\n");
		System.out.println(result);
		return result;
	}
	
	
	
	@RequestMapping(value="/DataStreetToday")
	@ResponseBody
	public Map<String,Map<String,Integer>> dataStreetToday(@RequestParam("year") String year,@RequestParam("month") String month,
			@RequestParam("day") String day,@RequestParam("hour") String hour,@RequestParam("minute") String minute,@RequestParam("second")String second){
		Map<String,String> map = new HashMap<String, String>();
		System.out.println(year+"-"+month+"-"+day+"-"+hour+"-"+minute+"-"+second);
		String begin_time = getTime(year, month, day, "0", "0", "0");
		String end_time = getTime(year,month,day,hour,minute,day);
		map.put("begin_time",begin_time);
		map.put("end_time", end_time);
		Map<String,Map<String,Integer>> result = livelihoodService.queryStreetDataToday(map);
		System.out.println("\n");
		System.out.println(result);
		return result;
	}
	
	@RequestMapping(value="/DataStreetByMonth")
	@ResponseBody
	public Map<String,Map<String,Integer>> dataStreetToday(@RequestParam("year") String year,@RequestParam("month") String month){
		System.out.println(month);
		Map<String,String> map = new HashMap<String, String>();
		Map<String,Map<String,Integer>> result = livelihoodService.queryStreetDataByMonth(month);
		System.out.println("\n");
		System.out.println(result);
		return result;
	}
	
	@RequestMapping(value="/HotCommunityToday")
	@ResponseBody
	public Map<String,Integer> hotCommunityToday(@RequestParam("year") String year,@RequestParam("month") String month,
			@RequestParam("day") String day,@RequestParam("hour") String hour,@RequestParam("minute") String minute,@RequestParam("second")String second){
		System.out.println(year+"-"+month+"-"+day+"-"+hour+"-"+minute+"-"+second);		
		Map<String,String> map = new HashMap<String, String>();
		String begin_time = getTime(year, month, day, "0", "0", "0");
		String end_time = getTime(year,month,day,hour,minute,day);
		map.put("begin_time",begin_time);
		map.put("end_time", end_time);
		Map<String, Integer> result = livelihoodService.queryCommunityByMonth(month);
		System.out.println("\n");
		System.out.println(result);
		return result;
	}
	
//	@RequestMapping(value="/kindByMonth")
//	@ResponseBody
//	public Map<String,Integer> queryKindBymonth(@RequestParam("month") String month){
//		Map<String,Integer> result = livelihoodService.queryKindByMonth(month);
//		return result;
//	}
//	
//	@RequestMapping(value="/kindByQ")
//	@ResponseBody
//	public Map<String,Integer> queryKindByQ(@RequestParam("month") int q){
//		Map<String,Integer> result = livelihoodService.queryKindByQ(q);
//		return result;
//	}
//	
//	@RequestMapping(value="/kindByToday")
//	@ResponseBody
//	public Map<String,Integer> queryKindByQ(@RequestParam("year") String year,@RequestParam("month") String month,
//			@RequestParam("day") String day,@RequestParam("hour") String hour,@RequestParam("minute") String minute,@RequestParam("second")String second){
//		System.out.println(year+"-"+month+"-"+day+"-"+hour+"-"+minute+"-"+second);
//		Map<String,String> map = new HashMap<String, String>();
//		String begin_time = getTime("2017", month, day, "0", "0", "0");
//		String end_time = getTime(year,month,day,hour,minute,day);
//		map.put("begin_time",begin_time);
//		map.put("end_time", end_time);
//		Map<String,Integer> result = livelihoodService.queryKindByToday(map);
//		System.out.println("\n");
//		System.out.println(result);
//		return result;
//	}
	
	@RequestMapping(value="/kind")
	@ResponseBody
	public Map<String,Map<String,Integer>> queryKind(@RequestParam("time") String time,@RequestParam("flag") int flag){
		String[] timeSplit = time.split("-");
		if(flag == 1) {//by month 2019-8
			timeSplit[1] = getTime(timeSplit[1]);
			Map<String,Map<String,Integer>> result = livelihoodService.queryKindByMonth(timeSplit[1]);
			return result;
		}else if(flag == 2) {//by quater 1 2 3
			int quater = Integer.parseInt(time);
			Map<String,Map<String,Integer>> result = livelihoodService.queryKindByQ(quater);
			System.out.println(result);

			return result;
		}else if(flag == 3) {//by today 2019-10-30-12-26-00
			String end_time = getTime(timeSplit[0], timeSplit[1], timeSplit[2],timeSplit[3],timeSplit[4],timeSplit[5]);
			String begin_time = getTime("2017", "1", "1", "0", "0", "0");
			Map<String,String> map = new HashMap<String, String>();
			map.put("begin_time",begin_time);
			map.put("end_time", end_time);
			Map<String,Map<String,Integer>> result = livelihoodService.queryKindByToday(map);
			System.out.println(result);

			return result;
		}
		return null;
	}
	
	@RequestMapping("/NoDeal")
	@ResponseBody
	public Map<Integer,Map<String,String>> queryNoDealByToday(@RequestParam("year") String year,@RequestParam("month") String month,
			@RequestParam("day") String day,@RequestParam("hour") String hour,@RequestParam("minute") String minute,@RequestParam("second")String second){
		System.out.println(year+"-"+month+"-"+day+"-"+hour+"-"+minute+"-"+second);		
		Map<String,String> map = new HashMap<String, String>();
		String begin_time = getTime("2018", "1", "1", "0", "0", "0");
		String end_time = getTime(year,month,day,hour,minute,day);
		map.put("begin_time",begin_time);
		map.put("end_time", end_time);
		Map<Integer,Map<String,String>> re = livelihoodService.queryNoDeal(map);
		System.out.println(re);
		return re;
	}
	
	
	public String getTime(String year,String month,String day) {
		if(Integer.parseInt(month)<10) {
			month = "0" + month;
		}
		if(Integer.parseInt(day)<10) {
			day = "0" + day;
		}
		return year+"-"+month+"-"+day;
	}
	
	
	public String getTime(String month) {
		if(Integer.parseInt(month)<10) {
			return "0"+month;
		}
		return month;
	}
	public String getTime(String year,String month,String day,String hour,String min,String sec) {
		if(Integer.parseInt(month)<10) {
			month = "0" + month;
		}
		if(Integer.parseInt(day)<10) {
			day = "0" + day;
		}
		if(Integer.parseInt(hour)<10) {
			hour = "0" + hour;
		}
		if(Integer.parseInt(min)<10) {
			min = "0" + min;
		}
		if(Integer.parseInt(sec)<10) {
			sec = "0" + sec;
		}
		return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec;
	}
}
