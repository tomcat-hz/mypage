package com.hz.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.apache.commons.lang.builder.ReflectionToStringBuilder;

import java.io.Serializable;

/**
 * 
 * @author djin
 *    User实体类
 * @date 2020-01-06 13:32:21
 */
@JsonIgnoreProperties(value = { "hibernateLazyInitializer", "handler" })
public class UserEntity implements Serializable{

	  private static final long serialVersionUID = 1L;
	
      //
	  private Integer id;
      //
	  private String userName;
      //
	  private String userPwd;

	  /**
	   * 设置：
	   */
	  public void setId(Integer id) {
		  this.id = id;
	  }
	  /**
	   * 获取：
	   */
	  public Integer getId() {
	   	  return id;
	  }
	  /**
	   * 设置：
	   */
	  public void setUserName(String userName) {
		  this.userName = userName;
	  }
	  /**
	   * 获取：
	   */
	  public String getUserName() {
	   	  return userName;
	  }
	  /**
	   * 设置：
	   */
	  public void setUserPwd(String userPwd) {
		  this.userPwd = userPwd;
	  }
	  /**
	   * 获取：
	   */
	  public String getUserPwd() {
	   	  return userPwd;
	  }

	 
	  @Override
	  public String toString() {
		  return  ReflectionToStringBuilder.toString(this);
	  }

}
