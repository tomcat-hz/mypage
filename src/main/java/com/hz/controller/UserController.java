package com.hz.controller;

import com.hz.model.UserEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 * 
 * @author djin
 *   User控制器
 * @date 2020-01-06 13:32:21
 */
@Controller
@RequestMapping("/user")
public class UserController extends BaseController<UserEntity>{

	@RequestMapping("/login")
	public @ResponseBody
	String login(UserEntity userEntity, HttpSession session) {
		try {
			Long i = baseService.getTotalByPramas(userEntity);
			session.setAttribute("user", userEntity);
			return i > 0 ? "success" : "fail";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}

	@RequestMapping("exit")
	public @ResponseBody
	String exit(HttpSession session) {
		session.removeAttribute("user");
		return "success";
	}

	@RequestMapping("/toIndex")
	public String toIndex() {
		return "index";
	}
}
