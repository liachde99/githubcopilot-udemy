package com.copilotapi.handlers;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.handlers.HandlerUtil;
import com.copilotapi.ui.PopupDialog;

public class ShowPopupHandler extends AbstractHandler {

    @Override
    public Object execute(ExecutionEvent event) throws ExecutionException {
        IWorkbenchWindow window = HandlerUtil.getActiveWorkbenchWindowChecked(event);
        ITextSelection selection = (ITextSelection) window.getActivePage().getActivePart().getSite().getSelectionProvider().getSelection();

        String selectedText = selection.getText();
        PopupDialog dialog = new PopupDialog(window.getShell(), selectedText);
        dialog.open();

        return null;
    }
}