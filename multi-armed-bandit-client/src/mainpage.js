import React, { useState, useEffect } from "react";
import { TabMenu } from "../src";
import axios from "axios";

const MainPage = () => {
  let [models, setModels] = useState([]);
  let [training_cycle, setTrainingCycle] = useState([]);
  const getModels = () => {
    axios
      .get("http://127.0.0.1:8000/api/models")
      .then((response) => {
        // handle success
        setModels(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  const getTrainingData = ($model_id) => {
    axios
      .get("http://127.0.0.1:8000/api/trainings/" + $model_id)
      .then((response) => {
        // handle success
        setTrainingCycle(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getModels();
  }, []);
  return (
    <>
      {/* <TabMenu /> */}
      <div className='row'>
        <div className='col s12 m4'></div>
        <div className='col s12 m4 center-align'>
          <a className='waves-effect waves-light btn'>Start New Client</a>
        </div>
        <div className='col s12 m4'></div>
      </div>
      <div className='row'>
        <div className='col s12 m6'>
          <h2> Models </h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Model Name</th>
                <th>Alphas</th>
                <th>Betas</th>
                <th>Status</th>
                <th>Dimension/Options</th>
                <th>Max No. of Users</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key='{model.id}'>
                  <td>{model.id}</td>
                  <td>{model.model_name}</td>
                  <td>{model.alphas}</td>
                  <td>{model.betas}</td>
                  <td>{model.status}</td>
                  <td>{model.options}</td>
                  <td>{model.max_workers}</td>
                  <td>
                    <button
                      className='btn waves-effect waves-light'
                      onClick={() => getTrainingData(model.id)}
                    >
                      <i className='material-icons right'>send</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='col s12 m6'>
          <h2> Training Models </h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Model Id</th>
                <th>Start Alphas</th>
                <th>End Alphas</th>
                <th>Start Beta</th>
                <th>End Beta</th>
                <th>Cycle status</th>
                <th>No of workers participated</th>
              </tr>
            </thead>
            <tbody>
              {training_cycle.map((training_cycle) => (
                <tr key='{training_cycle.id}'>
                  <td>{training_cycle.id}</td>
                  <td>{training_cycle.server_id}</td>
                  <td>{training_cycle.start_alphas}</td>
                  <td>{training_cycle.end_alphas}</td>
                  <td>{training_cycle.start_betas}</td>
                  <td>{training_cycle.end_betas}</td>
                  <td>{training_cycle.cycle_status}</td>
                  <td>{training_cycle.n_worker_participated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default MainPage;
