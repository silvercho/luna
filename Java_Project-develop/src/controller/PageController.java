package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
	
	@GetMapping("/car_summary")
	public String car_summary() {
		
		return "car_summary";
	}
	
	@GetMapping("/community_notice")
	public String community_notice() {
		
		return "community_notice";
	}
	
	@GetMapping("/community_review")
	public String community_review() {
		
		return "community_review";
	}
	
	@GetMapping("/community_talkboard")
	public String community_talboard() {
		
		return "community_talkboard";
	}
	
	@GetMapping("/search_station_default")
	public String search_station_default() {
		
		return "search_station_default";
	}

}
