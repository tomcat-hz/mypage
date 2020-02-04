package com.hz.service.impl;

import com.hz.model.UserEntity;
import com.hz.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 
 * @author djin
 *    User业务层实现类
 * @date 2020-01-06 13:32:21
 */
@Service
@Transactional
public class UserServiceImpl extends BaseServiceImpl<UserEntity> implements UserService {
	
}
