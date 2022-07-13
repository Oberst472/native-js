export const tableItemTemplate = (index, {phone, name, isForm}) => `
        <div class="table-item">
                <span class="index table-item__index">${index} </span>
                <span class="table-item__text">${name}</span>
                <span class="table-item__text table-item__phone">${phone}</span>
                <button class="table-item__btn btn--warning btn btn--circle" data-name="js-btn-ch" title="Change">&#9998;</button>
                <button class="table-item__btn btn--negative btn btn--circle" data-name="js-btn-del" title="Delete">&#10008;</button>
        </div>`

export const headFormTemplate = () => `
            <form class="head-form" data-name="js-head-form">
                <label class="head-form__el">
                    <span class="title head-form__el-title">Name</span>
                    <input class="input" data-name="js-head-inp-n" type="text" placeholder="Ivan Pupkin">
                    <span class="error head-form__error">Name is empty :(</span>
                </label>
                
                <label class="head-form__el">
                    <span class="title head-form__el-title">Phone</span>
                    <input class="input" data-name="js-head-inp-p" type="text" placeholder="+987654321">
                    <span class="error head-form__error">Phone can contains to numbers, - and +</span>
                </label>
              
                <button type="submit" class="head-form__btn btn btn--positive" data-name="js-head-btn">Add</button>
            </form>`

export const formTemplate = (index) => `
            <form class="change-form" data-name="js-form">
                <span class="index change-form__index">${index} </span>
                
                <label class="change-form__el">
                    <input class="input change-form__inp" data-name="js-inp-n" type="text" placeholder="name">
                    <span class="error change-form__error">Name is empty :(</span>
                </label>
                
                <label class="change-form__el">
                    <input class="input change-form__inp" data-name="js-inp-p" type="text" placeholder="phone">
                    <span class="error change-form__error">Phone can contains to numbers, - and +</span>
                </label>
              
                <button type="submit" class="btn btn--circle btn--positive" data-name="js-btn-s" title="Save">&#10004;</button>
                <button type="button" class="btn btn--circle btn--primary" data-name="js-btn-b" title="Back">&#10142;</button>
            </form>
        `
