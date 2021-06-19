import React from 'react'
import styles from './Pick3Nub.module.css'
export const Pick3Nub = () => {
    return (
        <div className={`${styles.main_Pick3Nub} row`}>
            <div className="col-lg-6 col-md-12">
                <div className={styles.nested_div_pick3nub}>
                    <p>
                        Pick 3 Numbers
                    </p>
                    <div className={styles.selection_div}>
                        <select className="" aria-label="Default select example">
                            <option selected value="select"></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>

                        </select>
                        <select className="" aria-label="Default select example">
                            <option selected value="select"></option>

                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>

                        </select>
                        <select className="" aria-label="Default select example">
                            <option selected value="select"></option>

                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>

                        </select>
                            <button type="button" className={`btn btn-info ${styles.selector_button}`}>+</button>
                    </div>
                    <p>Number on this ticket</p>
                </div>
            </div>

            <div className="col-lg-6 col-md-12">
                <div className={styles.nested_div_pick3nub}>
                    <p>
                        Pick 3 Numbers
                    </p>
                    <div className={styles.selection_div}>
                        <select className="" aria-label="Default select example">
                            <option selected value="select"></option>

                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>

                        </select>
                        <select className="" aria-label="Default select example">
                            <option selected value="select"></option>

                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>

                        </select>
                        <select className="" aria-label="Default select example">
                            <option selected value="select"></option>

                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>

                        </select>
                            <button type="button" className={`btn btn-info ${styles.selector_button}`}>+</button>
                    </div>
                    <p>Number on this ticket</p>

                </div>
            </div>
        </div>
    )
}