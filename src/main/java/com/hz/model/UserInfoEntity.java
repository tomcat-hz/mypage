package com.hz.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.apache.commons.lang.builder.ReflectionToStringBuilder;

import java.io.Serializable;

/**
 * 
 * @author djin
 *    UserInfo实体类
 * @date 2020-01-10 17:31:05
 */
@JsonIgnoreProperties(value = { "hibernateLazyInitializer", "handler" })
public class UserInfoEntity implements Serializable{

	  private static final long serialVersionUID = 1L;
	
      //
	  private Integer id;
      //
	  private String phone;
      //
	  private String school;
      //
	  private String qq;
      //
	  private String job;
      //
	  private String photo;
      //
	  private String hobby;
      //
	  private Integer uid;

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
	  public void setPhone(String phone) {
		  this.phone = phone;
	  }
	  /**
	   * 获取：
	   */
	  public String getPhone() {
	   	  return phone;
	  }
	  /**
	   * 设置：
	   */
	  public void setSchool(String school) {
		  this.school = school;
	  }
	  /**
	   * 获取：
	   */
	  public String getSchool() {
	   	  return school;
	  }
	  /**
	   * 设置：
	   */
	  public void setQq(String qq) {
		  this.qq = qq;
	  }
	  /**
	   * 获取：
	   */
	  public String getQq() {
	   	  return qq;
	  }
	  /**
	   * 设置：
	   */
	  public void setJob(String job) {
		  this.job = job;
	  }
	  /**
	   * 获取：
	   */
	  public String getJob() {
	   	  return job;
	  }
	  /**
	   * 设置：
	   */
	  public void setPhoto(String photo) {
		  this.photo = photo;
	  }
	  /**
	   * 获取：
	   */
	  public String getPhoto() {
	   	  return photo;
	  }
	  /**
	   * 设置：
	   */
	  public void setHobby(String hobby) {
		  this.hobby = hobby;
	  }
	  /**
	   * 获取：
	   */
	  public String getHobby() {
	   	  return hobby;
	  }
	  /**
	   * 设置：
	   */
	  public void setUid(Integer uid) {
		  this.uid = uid;
	  }
	  /**
	   * 获取：
	   */
	  public Integer getUid() {
	   	  return uid;
	  }

	 
	  @Override
	  public String toString() {
		  return  ReflectionToStringBuilder.toString(this);
	  }

}
