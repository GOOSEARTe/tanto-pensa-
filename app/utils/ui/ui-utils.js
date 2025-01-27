import { isAndroid, Utils } from '@nativescript/core';

export const UIUtils = {
  showKeyboard(textField) {
    if (textField.android) {
      textField.android.requestFocus();
      const imm = Utils.android.getInputMethodManager();
      imm.showSoftInput(textField.android, 0);
    } else if (textField.ios) {
      textField.ios.becomeFirstResponder();
    }
  },

  hideKeyboard() {
    if (isAndroid) {
      Utils.android.dismissSoftInput();
    } else {
      Utils.ios.getter(UIApplication, UIApplication.sharedApplication)
        .keyWindow
        .endEditing(true);
    }
  },

  disableUserInteraction(view) {
    view.isUserInteractionEnabled = false;
  },

  enableUserInteraction(view) {
    view.isUserInteractionEnabled = true;
  }
};