frappe.after_ajax(() => {

    if (frappe.views && frappe.views.BaseList) {

        const original_setup_defaults = frappe.views.BaseList.prototype.setup_defaults;

        frappe.views.BaseList.prototype.setup_defaults = function () {
            original_setup_defaults.call(this);
            this.page_length = 2500;
        };
    }
});