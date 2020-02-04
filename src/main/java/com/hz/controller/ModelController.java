package com.hz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @version V1.0
 * @author: hezheng
 * @date: 2020/1/6 11:10
 */
@Controller
public class ModelController {
    //去到首页
    @RequestMapping("/tologin")
    public  String toLogin() {
        return "login";
    }

    //去到用户信息页面
    @RequestMapping("/toUserInfo")
    public String toUserInfo() {
        return "userInfo";
    }

    //去到mysql信息页面
    @RequestMapping("/mysql")
    public String toMysql() {
        return "mysql";
    }

    //去到首页
    @RequestMapping("/main")
    public String toMain() {
        return "main";
    }

    //去到日志页面
    @RequestMapping("/log")
    public String toLog() {
        return "log";
    }

    //去到测试页面
    @RequestMapping("/test")
    public String toTest() {
        return "test";
    }
    //去到音乐页面
    @RequestMapping("/song")
    public String toSong() {
        return "song";
    }
}
