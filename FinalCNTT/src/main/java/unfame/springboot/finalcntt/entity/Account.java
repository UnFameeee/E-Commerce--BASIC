package unfame.springboot.finalcntt.entity;

import java.io.Serializable;
import javax.persistence.*;

@Entity(name = "ACCOUNT")
@Table(name = "ACCOUNT")
public class Account implements Serializable{

    public static final String ROLE_USER = "USER";
    public static final String ROLE_ADMIN = "ADMIN";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id", nullable = false)
    private Long Id;

    @Column(name = "Username", nullable = false)
    private String Username;

    @Column(name = "Password", nullable = false)
    private String Password;

    @Column(name = "Role", nullable = false)
    private String Role;

    @Column(name = "Active", nullable = false)
    private boolean Active;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getRole() {
        return Role;
    }

    public void setRole(String role) {
        Role = role;
    }

    public boolean isActive() {
        return Active;
    }

    public void setActive(boolean active) {
        this.Active = active;
    }

    @Override
    public String toString() {
        return "[" + this.Username + "," + this.Password + "," + this.Role + "]";
    }
}
