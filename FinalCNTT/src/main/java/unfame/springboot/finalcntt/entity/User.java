package unfame.springboot.finalcntt.entity;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "USER")
public class User implements Serializable{
    @Id
    @Column(name = "Id")
    private Long Id;

    @Column(name = "Fullname")
    private String Fullname;

    @Lob
    @Column(name = "Image", length = Integer.MAX_VALUE)
    private byte[] Image;

    @Column(name = "Email")
    private String Email;

    @Column(name = "Birth")
    private String Birth;

    @Column(name = "Phone")
    private String Phone;

    @Column(name = "Gender")
    private String Gender;

    @Column(name = "Address")
    private String Address;

    @Column(name = "Account_id")
    private Long Account_id;

    public User() {
    }

    public User(String name, byte[] image) {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getFullname() {
        return Fullname;
    }

    public void setFullname(String fullname) {
        Fullname = fullname;
    }

    public byte[] getImage() {
        return Image;
    }

    public void setImage(byte[] image) {
        Image = image;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getBirth() {
        return Birth;
    }

    public void setBirth(String birth) {
        Birth = birth;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public Long getAccount_id() {
        return Account_id;
    }

    public void setAccount_id(Long account_id) {
        Account_id = account_id;
    }
}
