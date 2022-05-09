import React from "react";

const logProfiler = (data) => {
  // console.log("%c profiler", "color: LightCoral", data);
};

export default function Profiler({ phases = [], ...props }) {
  const handleRender = (
    id, // la prop "id" du Profiler dont l’arborescence vient d’être mise à jour
    phase, // soit "mount" (si on est au montage) soit "update" (pour une mise à jour)
    actualDuration, // temps passé à faire le rendu de la mise à jour finalisée
    baseDuration, // temps estimé du rendu pour l’ensemble du sous-arbre sans mémoïsation
    startTime, // horodatage du début de rendu de cette mise à jour par React
    commitTime, // horodatage de la finalisation de cette mise à jour par React
    interactions // Un Set des interactions qui constituent cette mise à jour) => {
  ) => {
    if (!phases.length || phases.includes(phase)) {
      logProfiler({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
      });
    }
  };

  return <React.Profiler onRender={handleRender} {...props}></React.Profiler>;
}
