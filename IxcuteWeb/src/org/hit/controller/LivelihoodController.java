package org.hit.controller;

import java.util.HashMap;
import java.util.Map;

import org.hit.service.Impl.LivelihoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class LivelihoodController {

	
	@Autowired
	private LivelihoodService livelihoodService;
	
	@RequestMapping(value="/Next")
	public String Next() {
//		System.out.println("QueryByProperties");
		Map map = new HashMap<String, Integer>();
		map.put("begin_time","2018-07-20");
		map.put("end_time","2018-10-31");
		Map result = livelihoodService.queryDataPropertiesByDate(map);
		
//		String month = "08";
//		Map result = livelihoodService.queryKindByMonth(month);
		
		System.out.println("\n");
		System.out.println(result);
		return "next";
	}
}
