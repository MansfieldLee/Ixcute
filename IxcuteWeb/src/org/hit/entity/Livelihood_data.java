package org.hit.entity;

public class Livelihood_data {
	private int rec_id;
	private int report_num;
	private String create_time; //?‘› ±”√string
	private String district_name;
	private int district_id;
	private String street_name;
	private int street_id;
	private String community_name;
	private int community_id;
	private String event_type_name;
	private int event_type_id;
	private String main_type_name;
	private int main_type_id;
	private String sub_type_name;
	private int sub_type_id;
	private String dispose_unit_name;
	private int dispose_unit_id;
	private String event_src_name;
	private int event_src_id;
	private int operate_num;
	private int overtime_archive_num;
	private int intime_to_archive_num;
	private int intime_archive_num;
	private int event_property_id;
	private String event_property_name;
	
	public Livelihood_data() {
	}
	
	
	
	public Livelihood_data(int rec_id, int report_num, String create_time, String district_name, int district_id,
			String street_name, int street_id, String community_name, int community_id, String event_type_name,
			int event_type_id, String main_type_name, int main_type_id, String sub_type_name, int sub_type_id,
			String dispose_unit_name, int dispose_unit_id, String event_src_name, int event_src_id, int operate_num,
			int overtime_archive_num, int intime_to_archive_num, int intime_archive_num, int event_property_id,
			String event_property_name) {
		this.rec_id = rec_id;
		this.report_num = report_num;
		this.create_time = create_time;
		this.district_name = district_name;
		this.district_id = district_id;
		this.street_name = street_name;
		this.street_id = street_id;
		this.community_name = community_name;
		this.community_id = community_id;
		this.event_type_name = event_type_name;
		this.event_type_id = event_type_id;
		this.main_type_name = main_type_name;
		this.main_type_id = main_type_id;
		this.sub_type_name = sub_type_name;
		this.sub_type_id = sub_type_id;
		this.dispose_unit_name = dispose_unit_name;
		this.dispose_unit_id = dispose_unit_id;
		this.event_src_name = event_src_name;
		this.event_src_id = event_src_id;
		this.operate_num = operate_num;
		this.overtime_archive_num = overtime_archive_num;
		this.intime_to_archive_num = intime_to_archive_num;
		this.intime_archive_num = intime_archive_num;
		this.event_property_id = event_property_id;
		this.event_property_name = event_property_name;
	}



	public int getRec_id() {
		return rec_id;
	}
	public void setRec_id(int rec_id) {
		this.rec_id = rec_id;
	}
	public int getReport_num() {
		return report_num;
	}
	public void setReport_num(int report_num) {
		this.report_num = report_num;
	}
	public String getCreate_time() {
		return create_time;
	}
	public void setCreate_time(String create_time) {
		this.create_time = create_time;
	}
	public String getDistrict_name() {
		return district_name;
	}
	public void setDistrict_name(String district_name) {
		this.district_name = district_name;
	}
	public int getDistrict_id() {
		return district_id;
	}
	public void setDistrict_id(int district_id) {
		this.district_id = district_id;
	}
	public String getStreet_name() {
		return street_name;
	}
	public void setStreet_name(String street_name) {
		this.street_name = street_name;
	}
	public int getStreet_id() {
		return street_id;
	}
	public void setStreet_id(int street_id) {
		this.street_id = street_id;
	}
	public String getCommunity_name() {
		return community_name;
	}
	public void setCommunity_name(String community_name) {
		this.community_name = community_name;
	}
	public int getCommunity_id() {
		return community_id;
	}
	public void setCommunity_id(int community_id) {
		this.community_id = community_id;
	}
	public String getEvent_type_name() {
		return event_type_name;
	}
	public void setEvent_type_name(String event_type_name) {
		this.event_type_name = event_type_name;
	}
	public int getEvent_type_id() {
		return event_type_id;
	}
	public void setEvent_type_id(int event_type_id) {
		this.event_type_id = event_type_id;
	}
	public String getMain_type_name() {
		return main_type_name;
	}
	public void setMain_type_name(String main_type_name) {
		this.main_type_name = main_type_name;
	}
	public int getMain_type_id() {
		return main_type_id;
	}
	public void setMain_type_id(int main_type_id) {
		this.main_type_id = main_type_id;
	}
	public String getSub_type_name() {
		return sub_type_name;
	}
	public void setSub_type_name(String sub_type_name) {
		this.sub_type_name = sub_type_name;
	}
	public int getSub_type_id() {
		return sub_type_id;
	}
	public void setSub_type_id(int sub_type_id) {
		this.sub_type_id = sub_type_id;
	}
	public String getDispose_unit_name() {
		return dispose_unit_name;
	}
	public void setDispose_unit_name(String dispose_unit_name) {
		this.dispose_unit_name = dispose_unit_name;
	}
	public int getDispose_unit_id() {
		return dispose_unit_id;
	}
	public void setDispose_unit_id(int dispose_unit_id) {
		this.dispose_unit_id = dispose_unit_id;
	}
	public String getEvent_src_name() {
		return event_src_name;
	}
	public void setEvent_src_name(String event_src_name) {
		this.event_src_name = event_src_name;
	}
	public int getEvent_src_id() {
		return event_src_id;
	}
	public void setEvent_src_id(int event_src_id) {
		this.event_src_id = event_src_id;
	}
	public int getOperate_num() {
		return operate_num;
	}
	public void setOperate_num(int operate_num) {
		this.operate_num = operate_num;
	}
	public int getOvertime_archive_num() {
		return overtime_archive_num;
	}
	public void setOvertime_archive_num(int overtime_archive_num) {
		this.overtime_archive_num = overtime_archive_num;
	}
	public int getIntime_to_archive_num() {
		return intime_to_archive_num;
	}
	public void setIntime_to_archive_num(int intime_to_archive_num) {
		this.intime_to_archive_num = intime_to_archive_num;
	}
	public int getIntime_archive_num() {
		return intime_archive_num;
	}
	public void setIntime_archive_num(int intime_archive_num) {
		this.intime_archive_num = intime_archive_num;
	}
	public int getEvent_property_id() {
		return event_property_id;
	}
	public void setEvent_property_id(int event_property_id) {
		this.event_property_id = event_property_id;
	}
	public String getEvent_property_name() {
		return event_property_name;
	}
	public void setEvent_property_name(String event_property_name) {
		this.event_property_name = event_property_name;
	}

	
	@Override
	public String toString() {
		return "Livelihood_data [rec_id=" + rec_id + ", report_num=" + report_num + ", create_time=" + create_time
				+ ", district_name=" + district_name + ", district_id=" + district_id + ", street_name=" + street_name
				+ ", street_id=" + street_id + ", community_name=" + community_name + ", community_id=" + community_id
				+ ", event_type_name=" + event_type_name + ", event_type_id=" + event_type_id + ", main_type_name="
				+ main_type_name + ", main_type_id=" + main_type_id + ", sub_type_name=" + sub_type_name
				+ ", sub_type_id=" + sub_type_id + ", dispose_unit_name=" + dispose_unit_name + ", dispose_unit_id="
				+ dispose_unit_id + ", event_src_name=" + event_src_name + ", event_src_id=" + event_src_id
				+ ", operate_num=" + operate_num + ", overtime_archive_num=" + overtime_archive_num
				+ ", intime_to_archive_num=" + intime_to_archive_num + ", intime_archive_num=" + intime_archive_num
				+ ", event_property_id=" + event_property_id + ", event_property_name=" + event_property_name
				+ "]";
	}
	
	
}
