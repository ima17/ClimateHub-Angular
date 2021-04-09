import { ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';
//import { DatePipe } from '@angular/common';


export function dateLessThan(firstDate: string, secondDate: string): ValidatorFn {
    return (form: AbstractControl): { [key: string]: boolean } | null => {
        const firstDateVal = form.get(firstDate).value;
        const secondDateVal = form.get(secondDate).value;

        if (!firstDate || !secondDate) {
            return { missing: true };
        }

        const sDate = new Date(firstDateVal);
        const eDate = new Date(secondDateVal);

        if (sDate.getTime() >= eDate.getTime()) {
            const err = { dateLessThan: true };
            form.get(firstDate).setErrors(err);
            return err;
        }
        else {
            const dateLessError = form.get(firstDate).hasError('dateLessThan');
            if (dateLessError) {
                delete form.get(firstDate).errors['dateLessThan'];
                form.get(firstDate).updateValueAndValidity();
            }
        }
    };
}
export function pastDate(firstDate: string): ValidatorFn {
    return (form: AbstractControl): { [key: string]: boolean } | null => {
        const firstDateVal = form.get(firstDate).value;
        const today = new Date();
        const sDate = new Date(firstDateVal);
        

        if (sDate.getTime() < today.getTime()) {
            const err = { pastDate: true };
            form.get(firstDate).setErrors(err);
            return err;
        }
        else {
            const pastDateErr = form.get(firstDate).hasError('pastDate');
            if (pastDateErr) {
                delete form.get(firstDate).errors['pastDate'];
                form.get(firstDate).updateValueAndValidity();
            }

        }
    }
}
