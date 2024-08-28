import React from 'react';
import ArtboardHome from './ArtboardHome';
import TabSlider from './TabSlider';
import StudySlider from './StudySlider';
import Winning from './Winning';
import Getreal from './Getreal';
import Premium from './Premium';
import MapUse from './MapUse';
import UniversityPartner from './UniversityPartner';
import ClientView from './ClientView';
import Abroad from './Abroad';
import axios from 'axios';
// import $ from 'jquery';

class Home extends React.Component {

      constructor(props) {
      super(props)
      this.state = {
        data: []
              }
      }

      componentDidMount(){
        
        var geturl = 'https://megamindonline.com/admin/webmanager/controller.php?command=GET_HOME_DATA';
		console.log("geturl="+geturl);
        axios.get(geturl).then(res => 
        {
			this.setState({data: res.data});
		}); 
      }
     render() 
	 {
		return (
			<>
				<ArtboardHome />
				<Premium />
				{/* <Abroad/> */}
				<TabSlider />
				<StudySlider />
				<Winning />
				<Getreal />
				
				<MapUse />
				<UniversityPartner />
				<ClientView />

			</>
		)
	 }
}
export default Home;
