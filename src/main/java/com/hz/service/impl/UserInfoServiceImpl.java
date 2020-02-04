package com.hz.service.impl;

import com.hz.model.UserInfoEntity;
import com.hz.service.UserInfoService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 
 * @author djin
 *    UserInfo业务层实现类
 * @date 2020-01-10 17:31:05
 */
@Service
@Transactional
public class UserInfoServiceImpl extends BaseServiceImpl<UserInfoEntity> implements UserInfoService {
	
}
