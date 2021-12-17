package unfame.springboot.finalcntt.global;

public class GlobalVariable {
    public static Long IDuser = -1L;
    public static Long IDaccount = -1L;
    public static String UserRole = null;

    public static boolean checkSession(){
        return IDuser != -1L && IDaccount != -1L && UserRole != null;
    }
}
