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
		
		Map map = new HashMap<String, Integer>();
		String begin_time  = beginYear+"-"+beginMonth+"-"+beginDay;
		String end_time = endYear + "-" + endMonth + "-" + endDay;
		
		System.out.println("begin_time:"+begin_time);
		System.out.println("end_time"+end_time);
		map.put("begin_time",begin_time);
		map.put("end_time",end_time);
		
		Map<String,Integer> result = livelihoodService.queryDataPropertiesByDate(map);
//		Map result = livelihoodService.queryDataPropertiesByDate(map);
		
//		String month = "08";
//		Map result = livelihoodService.queryKindByMonth(month);
		System.out.println("\n");
		System.out.println(result);
		
		
		return result;
	}
}
