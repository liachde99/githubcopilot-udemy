import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

public class PopupDialog extends Dialog {
    private String selectedText;
    private Text textField;

    public PopupDialog(Shell parentShell, String selectedText) {
        super(parentShell);
        this.selectedText = selectedText;
    }

    @Override
    protected Composite createDialogArea(Composite parent) {
        Composite container = (Composite) super.createDialogArea(parent);
        textField = new Text(container, SWT.BORDER);
        textField.setText(selectedText);
        textField.setLayoutData(new org.eclipse.swt.layout.GridData(SWT.FILL, SWT.CENTER, true, false));
        return container;
    }

    @Override
    protected void okPressed() {
        // Handle the input from the text field if needed
        super.okPressed();
    }

    public String getInputText() {
        return textField.getText();
    }

    public static void openDialog(String selectedText) {
        Display display = Display.getDefault();
        Shell shell = new Shell(display);
        PopupDialog dialog = new PopupDialog(shell, selectedText);
        dialog.open();
    }
}