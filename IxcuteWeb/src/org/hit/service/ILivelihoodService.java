package org.hit.service;

import java.util.Map;

import org.hit.entity.Livelihood_data;

public interface ILivelihoodService {
	
	public Map<String,Integer> queryDataPropertiesByDate(Map map);
	
	public Map<String,Map<String,Integer>> queryStreetDataByMonth(String month);
	
	public Map<String, Integer> queryKindByMonth(String month);
	
}
