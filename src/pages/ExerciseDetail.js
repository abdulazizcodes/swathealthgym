import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

// import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
// import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import listOfAllExercises from '../data/listOfAllExercises.json';
// import listOfAllExercises from '../data/listOfAllExercises.json'
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  // const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      // const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      // const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      const exerciseDetailData = listOfAllExercises.filter((el)=> el.id===id);
      console.log("exercise details",exerciseDetailData);
      setExerciseDetail(exerciseDetailData[0]);

      // const exerciseVideosData =  fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData[0].name} exercise`, youtubeOptions);
      
      // setExerciseVideos(exerciseVideosData.contents);

      // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      const targetMuscleExercisesData =   listOfAllExercises.filter((el)=>el.target.includes(exerciseDetailData[0].target));
      // console.log(targetMuscleExercisesData)
      setTargetMuscleExercises(targetMuscleExercisesData);

      // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      const equimentExercisesData = listOfAllExercises.filter((el)=>el.equipment===exerciseDetailData[0].equipment)
      // console.log("equipment",equimentExercisesData)
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} /> */}
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
