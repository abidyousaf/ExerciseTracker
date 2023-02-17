import React from "react";
import { useContext } from "react";
import { SignupContext } from "../App";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Signup() {
  const { datasubmit, handlechange, handle } = useContext(SignupContext);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form
                      className="mx-1 mx-md-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            required
                            name="name"
                            {...register("name", { required: true })}
                            onChange={handlechange}
                            value={handle.name}
                          />
                          {errors.name && (
                            <div className="rerror">
                              Please Enter This Field
                            </div>
                          )}
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            required
                            {...register("email", { required: true })}
                            value={handle.email}
                            onChange={handlechange}
                          />
                          {errors.name && (
                            <div className="rerror">
                              Please Enter This Field
                            </div>
                          )}
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            required
                            {...register("password", {
                              required: true,
                              minLength: 7,
                            })}
                            onChange={handlechange}
                            value={handle.password}
                          />
                          {errors.password &&
                            errors.password.type == "required" && (
                              <div className="rerror">
                                Please Enter This Field
                              </div>
                            )}
                          {errors.password &&
                            errors.password.type == "minLength" && (
                              <div className="rerror">
                                Please Enter atleast 7 Letters
                              </div>
                            )}
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password_confirmation"
                            required
                            className="form-control"
                            onChange={handlechange}
                            value={handle.password_confirmation}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={handleSubmit(datasubmit)}
                        >
                          Register
                        </button>
                      </div>
                      <div id="formFooter">
                        <Link className="underlineHover" to="/login">
                          Already have an account ? Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Signup;
