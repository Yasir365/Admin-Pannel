export class formValidation {
    checkErrors(fc: any, form: any): boolean {
        return fc.invalid && (fc.touched || fc.dirty || form.submitted)
    }

}
