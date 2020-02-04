package com.hz;

import com.hz.mapper.UserMapper;
import com.hz.model.UserEntity;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * @version V1.0
 * @author: hezheng
 * @date: 2019/12/9 18:56
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = MyPageStart.class)
public class TestUsers {
    private static final Logger log = LogManager.getLogger(TestUsers.class);

    @Resource
    UserMapper userMapper;

    //测试查询表格数据
    @Test
    public void test01() {
        try {
            List<UserEntity> list = userMapper.queryAll();
            for (UserEntity userEntity : list) {
                log.info(userEntity);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //测试查询通过条件记录条数
    @Test
    public void test02() {
        UserEntity user = new UserEntity();
        user.setUserName("何正");
        user.setUserPwd("666");
        try {
            Long i = userMapper.queryTotalByPramas(user);
            log.info(i);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
