package com.hz.controller;

import com.hz.model.UserInfoEntity;
import com.hz.util.QiNiuUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

/**
 * 
 * @author djin
 *   UserInfo控制器
 * @date 2020-01-10 17:31:05
 */
@Controller
@RequestMapping("/userinfo")
public class UserInfoController extends BaseController<UserInfoEntity>{

    @RequestMapping("/upload")
    public @ResponseBody Map<String, Object> upload(MultipartFile multipartFile) {
        return QiNiuUtils.upload(multipartFile);
    }
}
