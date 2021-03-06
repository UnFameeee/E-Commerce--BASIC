package unfame.springboot.finalcntt.entity;

//import java.io.Serializable; implements Serializable
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Entity(name = "ACCOUNT")
@Table(name = "ACCOUNT")
public class Account {
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
}
