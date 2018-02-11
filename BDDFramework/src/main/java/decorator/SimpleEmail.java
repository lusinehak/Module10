package decorator;

public class SimpleEmail implements EMail {
    public String getContent() {
        return "Hello,\n\nThis is a basic content.\n";
    }
}
