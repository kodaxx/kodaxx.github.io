function surfaceSpeed(operation, material) {

    var hss = [0, 0];
    var carbide = [0, 0];
    var angle = [0, 0];

    if (operation == "face") {
        switch (material) {
            case "aluminum":
                var hss = [600, 1800];
                var carbide = [1000, 2000];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                var hss = [300, 450];
                var carbide = [600, 1300];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                var hss = [250, 400];
                var carbide = [500, 850];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                var hss = [110, 150];
                var carbide = [250, 350];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                var hss = [100, 130];
                var carbide = [300, 450];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                var hss = [70, 110];
                var carbide = [200, 350];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                var hss = [40, 80];
                var carbide = [150, 300];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                var hss = [80, 120];
                var carbide = [300, 450];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                var hss = [100, 160];
                var carbide = [300, 500];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                var hss = [80, 140];
                var carbide = [250, 400];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                var hss = [30, 90];
                var carbide = [150, 300];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    }
    
    else if (operation == "slab") {
        switch (material) {
            case "aluminum":
                var hss = [500, 1300];
                var carbide = [1000, 3000];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                var hss = [280, 450];
                var carbide = [500, 1000];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                var hss = [240, 400];
                var carbide = [450, 900];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                var hss = [100, 140];
                var carbide = [230, 300];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                var hss = [90, 130];
                var carbide = [220, 280];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                var hss = [60, 110];
                var carbide = [150, 200];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                var hss = [50, 90];
                var carbide = [120, 160];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                var hss = [70, 120];
                var carbide = [200, 280];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                var hss = [90, 150];
                var scarbide = [250, 450];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                var hss = [70, 130];
                var carbide = [200, 350];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                var hss = [30, 90];
                var carbide = [130, 250];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    }
    
    else if (operation == "end") {
        switch (material) {
            case "aluminum":
                var hss = [400, 800];
                var carbide = [800, 2000];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                var hss = [200, 350];
                var carbide = [500, 800];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                var hss = [150, 300];
                var carbide = [400, 600];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                var hss = [90, 130];
                var carbide = [220, 280];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                var hss = [80, 120];
                var carbide = [200, 280];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                var hss = [50, 100];
                var carbide = [180, 250];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                var hss = [30, 70];
                var carbide = [160, 220];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                var hss = [60, 110];
                var carbide = [180, 280];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                var hss = [80, 140];
                var carbide = [230, 400];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                var hss = [60, 130];
                var carbide = [200, 350];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                var hss = [20, 70];
                var carbide = [120, 200];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    }
    
    else if (operation == "turning") {
            switch (material) {
                case "aluminum":
                    var hss = [600, 1000];
                    var carbide = [1000, 2000];
                    return {hss: hss, carbide: carbide};
                    break;
                case "brass":
                    var hss = [350, 500];
                    var carbide = [600, 1000];
                    return {hss: hss, carbide: carbide};
                    break;
                case "bronze":
                    var hss = [200, 380];
                    var carbide = [400, 750];
                    return {hss: hss, carbide: carbide};
                    break;
                case "bronzeHard":
                    var hss = [100, 140];
                    var carbide = [210, 700];
                    return {hss: hss, carbide: carbide};
                    break;
                case "castSoft":
                    var hss = [60, 130];
                    var carbide = [250, 400];
                    return {hss: hss, carbide: carbide};
                    break;
                case "castHard":
                    var hss = [50, 110];
                    var carbide = [200, 350];
                    return {hss: hss, carbide: carbide};
                    break;
                case "castChilled":
                    var hss = [40, 80];
                    var carbide = [150, 270];
                    return {hss: hss, carbide: carbide};
                    break;
                case "mallIron":
                    var hss = [90, 120];
                    var carbide = [250, 400];
                    return {hss: hss, carbide: carbide};
                    break;
                case "steelSoft":
                    var hss = [80, 150];
                    var carbide = [320, 400];
                    return {hss: hss, carbide: carbide};
                    break;
                case "steelMedium":
                    var hss = [60, 140];
                    var carbide = [280, 400];
                    return {hss: hss, carbide: carbide};
                    break;
                case "steelHard":
                    var hss = [30, 80];
                    var carbide = [140, 300];
                    return {hss: hss, carbide: carbide};
                    break;
            }
        }
    
    else if (operation == "boring") {
            switch (material) {
                case "aluminum":
                    var hss = [500, 750];
                    var carbide = [800, 1600];
                    return {hss: hss, carbide: carbide};
                    break;
                case "brass":
                    var hss = [300, 400];
                    var carbide = [400, 900];
                    return {hss: hss, carbide: carbide};
                    break;
                case "bronze":
                    var hss = [180, 300];
                    var carbide = [300, 600];
                    return {hss: hss, carbide: carbide};
                    break;
                case "bronzeHard":
                    var hss = [90, 110];
                    var carbide = [200, 280];
                    return {hss: hss, carbide: carbide};
                    break;
                case "castSoft":
                    var hss = [50, 80];
                    var carbide = [220, 350];
                    return {hss: hss, carbide: carbide};
                    break;
                case "castHard":
                    var hss = [40, 70];
                    var carbide = [200, 260];
                    return {hss: hss, carbide: carbide};
                    break;
                case "castChilled":
                    var hss = [30, 60];
                    var carbide = [120, 220];
                    return {hss: hss, carbide: carbide};
                    break;
                case "mallIron":
                    var hss = [70, 100];
                    var carbide = [220, 300];
                    return {hss: hss, carbide: carbide};
                    break;
                case "steelSoft":
                    var hss = [70, 100];
                    var carbide = [300, 360];
                    return {hss: hss, carbide: carbide};
                    break;
                case "steelMedium":
                    var hss = [50, 130];
                    var carbide = [250, 350];
                    return {hss: hss, carbide: carbide};
                    break;
                case "steelHard":
                    var hss = [25, 70];
                    var carbide = [120, 250];
                    return {hss: hss, carbide: carbide};
                    break;
            }
        }
                    
    else if (operation == "drilling") {
        switch (material) {
                case "aluminum":
                    var hss = [140, 300];
                    var angle = [90, 140];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "brass":
                    var hss = [140, 200];
                    var angle = [118, 125];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "bronze":
                    var hss = [100, 150];
                    var angle = [118, 125];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "bronzeHard":
                    var hss = [50, 80];
                    var angle = [118, 118];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "castSoft":
                    var hss = [70, 100];
                    var angle = [90, 118];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "castHard":
                    var hss = [60, 80];
                    var angle = [118, 118];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "castChilled":
                    var hss = [50, 70];
                    var angle = [118, 135];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "mallIron":
                    var hss = [70, 90];
                    var angle = [118, 118];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "steelSoft":
                    var hss = [60, 80];
                    var angle = [118, 118];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "steelMedium":
                    var hss = [40, 60];
                    var angle = [118, 135];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
                case "steelHard":
                    var hss = [20, 30];
                    var angle = [118, 135];
                    return {
                        hss: hss,
                        angle: angle
                    };
                    break;
            }
        }
    
    else if (operation == "reaming") {
        switch (material) {
                case "aluminum":
                    var hss = [100, 200];
                    var carbide = [400, 850];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "brass":
                    var hss = [100, 180];
                    var carbide = [300, 360];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "bronze":
                    var hss = [80, 120];
                    var carbide = [250, 270];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "bronzeHard":
                    var hss = [40, 70];
                    var carbide = [180, 200];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "castSoft":
                    var hss = [60, 90];
                    var carbide = [150, 180];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "castHard":
                    var hss = [50, 70];
                    var carbide = [100, 150];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "castChilled":
                    var hss = [40, 60];
                    var carbide = [80, 110];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "mallIron":
                    var hss = [60, 80];
                    var carbide = [140, 170];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "steelSoft":
                    var hss = [50, 70];
                    var carbide = [190, 250];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "steelMedium":
                    var hss = [30, 60];
                    var carbide = [100, 200];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "steelHard":
                    var hss = [15, 30];
                    var carbide = [40, 100];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
            }
        }
    
    else if (operation == "counter") {
        switch (material) {
                case "aluminum":
                    var hss = [140, 300];
                    var carbide = [300, 500];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "brass":
                    var hss = [140, 200];
                    var carbide = [300, 400];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "bronze":
                    var hss = [100, 150];
                    var carbide = [280, 380];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "bronzeHard":
                    var hss = [50, 80];
                    var carbide = [160, 180];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "castSoft":
                    var hss = [70, 100];
                    var carbide = [200, 280];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "castHard":
                    var hss = [60, 80];
                    var carbide = [110, 200];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "castChilled":
                    var hss = [50, 70];
                    var carbide = [100, 180];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "mallIron":
                    var hss = [70, 90];
                    var carbide = [200, 280];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "steelSoft":
                    var hss = [60, 80];
                    var carbide = [200, 300];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "steelMedium":
                    var hss = [40, 60];
                    var carbide = [150, 250];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
                case "steelHard":
                    var hss = [20, 30];
                    var carbide = [90, 200];
                    return {
                        hss: hss,
                        carbide: carbide
                    };
                    break;
            }
        }
}

function RPM(surfaceLow, surfaceHigh, diameter) {
    var rpmLow = Math.round((surfaceLow * 12) / (Math.PI * diameter));
    var rpmHigh = Math.round((surfaceHigh * 12) / (Math.PI * diameter));
    return { rpmLow: rpmLow, rpmHigh: rpmHigh };
}

function feedRate(operation, material, diameter) {

    var hss = [0, 0];
    var carbide = [0, 0];

    if (operation == "face") {
        switch (material) {
            case "aluminum":
                var hss = [.010, .022];
                var carbide = [.012, .020];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                var hss = [.008, .020];
                var carbide = [.012, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                var hss = [.008, .020];
                var carbide = [.012, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                var hss = [.006, .010];
                var carbide = [.008, .010];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                var hss = [.010, .016];
                var carbide = [.014, .020];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                var hss = [.007, .013];
                var carbide = [.009, .016];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                var hss = [.005, .010];
                var carbide = [.007, .010];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                var hss = [.008, .012];
                var carbide = [.012, .016];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                var hss = [.006, .012];
                var carbide = [.010, .014];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                var hss = [.004, .012];
                var carbide = [.008, .014];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                var hss = [.003, .010];
                var carbide = [.006, .012];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    } else if (operation == "slab") {
        switch (material) {
            case "aluminum":
                var hss = [.010, .018];
                var carbide = [.014, .020];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                var hss = [.010, .018];
                var carbide = [.012, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                var hss = [.008, .018];
                var carbide = [.010, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                var hss = [.004, .007];
                var carbide = [.005, .008];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                var hss = [.008, .014];
                var carbide = [.016, .020];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                var hss = [.006, .014];
                var carbide = [.008, .112];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                var hss = [.006, .014];
                var carbide = [.008, .012];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                var hss = [.008, .014];
                var carbide = [.010, .014];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                var hss = [.006, .012];
                var scarbide = [.008, .012];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                var hss = [.005, .010];
                var carbide = [.006, .010];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                var hss = [.003, .008];
                var carbide = [.004, .008];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    } else if (operation == "end") {
        switch (material) {
            case "aluminum":
                if (diameter >= 2) {
                    var hss = [.005, .010];
                    var carbide = [.007, .010];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.004, .008];
                    var carbide = [.006, .009];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .008];
                    var carbide = [.004, .008];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .006];
                    var carbide = [.003, .006];
                } else if (diameter < .5) {
                    var hss = [.001, .004];
                    var carbide = [.002, .004];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                if (diameter >= 2) {
                    var hss = [.005, .010];
                    var carbide = [.007, .010];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.004, .009];
                    var carbide = [.005, .009];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .008];
                    var carbide = [.004, .008];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .005];
                    var carbide = [.003, .005];
                } else if (diameter < .5) {
                    var hss = [.001, .003];
                    var carbide = [.002, .003];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                if (diameter >= 2) {
                    var hss = [.004, .008];
                    var carbide = [.006, .009];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.003, .007];
                    var carbide = [.005, .008];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .006];
                    var carbide = [.005, .007];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .004];
                    var carbide = [.003, .005];
                } else if (diameter < .5) {
                    var hss = [.001, .003];
                    var carbide = [.002, .003];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                if (diameter >= 2) {
                    var hss = [.003, .007];
                    var carbide = [.005, .008];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.002, .006];
                    var carbide = [.004, .007];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.002, .005];
                    var carbide = [.004, .006];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.001, .003];
                    var carbide = [.002, .003];
                } else if (diameter < .5) {
                    var hss = [.001, .002];
                    var carbide = [.0015, .002];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                if (diameter >= 2) {
                    var hss = [.004, .007];
                    var carbide = [.005, .008];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.003, .006];
                    var carbide = [.004, .007];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.002, .005];
                    var carbide = [.003, .006];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.001, .003];
                    var carbide = [.002, .004];
                } else if (diameter < .5) {
                    var hss = [.001, .002];
                    var carbide = [.001, .002];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                if (diameter >= 2) {
                    var hss = [.003, .005];
                    var carbide = [.005, .006];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.003, .004];
                    var carbide = [.004, .005];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.002, .003];
                    var carbide = [.003, .004];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.001, .003];
                    var carbide = [.002, .003];
                } else if (diameter < .5) {
                    var hss = [.001, .002];
                    var carbide = [.001, .002];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                if (diameter >= 2) {
                    var hss = [.002, .004];
                    var carbide = [.004, .006];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.002, .003];
                    var carbide = [.003, .005];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.001, .003];
                    var carbide = [.002, .004];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.001, .0025];
                    var carbide = [.002, .003];
                } else if (diameter < .5) {
                    var hss = [.001, .002];
                    var carbide = [.001, .002];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
                break;
            case "mallIron":
                if (diameter >= 2) {
                    var hss = [.003, .005];
                    var carbide = [.005, .006];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.002, .004];
                    var carbide = [.004, .005];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.002, .004];
                    var carbide = [.003, .004];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.001, .003];
                    var carbide = [.002, .003];
                } else if (diameter < .5) {
                    var hss = [.001, .002];
                    var carbide = [.001, .002];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                if (diameter >= 2) {
                    var hss = [.004, .007];
                    var carbide = [.004, .007];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .005];
                    var carbide = [.003, .005];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .004];
                    var carbide = [.002, .004];
                } else if (diameter < .5) {
                    var hss = [.001, .002];
                    var carbide = [.0015, .0025];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                if (diameter >= 2) {
                    var hss = [.003, .006];
                    var carbide = [.004, .007];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.002, .004];
                    var carbide = [.003, .005];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.0015, .003];
                    var carbide = [.002, .004];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.001, .0025];
                    var carbide = [.001, .003];
                } else if (diameter < .5) {
                    var hss = [.0005, .002];
                    var carbide = [.001, .0025];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                if (diameter >= 2) {
                    var hss = [.002, .004];
                    var carbide = [.002, .005];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.001, .003];
                    var carbide = [.002, .004];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.001, .003];
                    var carbide = [.002, .004];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.001, .002];
                    var carbide = [.001, .0025];
                } else if (diameter < .5) {
                    var hss = [.0005, .001];
                    var carbide = [.001, .0015];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    } else if (operation == "turning") {
        switch (material) {
            case "aluminum":
                var hss = [.004, .015];
                var carbide = [.005, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                var hss = [.004, .015];
                var carbide = [.015, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                var hss = [.004, .015];
                var carbide = [.005, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                var hss = [.003, .012];
                var carbide = [.004, .015];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                var hss = [.005, .015];
                var carbide = [.006, .015];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                var hss = [.004, .015];
                var carbide = [.005, .015];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                var hss = [.003, .015];
                var carbide = [.004, .015];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                var hss = [.005, .015];
                var carbide = [.006, .015];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                var hss = [.004, .015];
                var carbide = [.005, .015];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                var hss = [.003, .015];
                var carbide = [.004, .015];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                var hss = [.002, .015];
                var carbide = [.003, .015];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    } else if (operation == "boring") {
        switch (material) {
            case "aluminum":
                var hss = [.003, .015];
                var carbide = [.004, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                var hss = [.003, .015];
                var carbide = [.004, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                var hss = [.003, .015];
                var carbide = [.004, .018];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                var hss = [.002, .010];
                var carbide = [.003, .015];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                var hss = [.004, .010];
                var carbide = [.005, .012];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                var hss = [.003, .008];
                var carbide = [.004, .010];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                var hss = [.002, .008];
                var carbide = [.003, .010];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                var hss = [.004, .010];
                var carbide = [.005, .012];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                var hss = [.003, .010];
                var carbide = [.004, .010];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                var hss = [.002, .010];
                var carbide = [.003, .010];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                var hss = [.001, .006];
                var carbide = [.002, .009];
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    } else if (operation == "drilling") {
        switch (material) {
            case "aluminum":
                if (diameter >= 2) {
                    var hss = [.015, .030];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.008, .020];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.006, .016];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.003, .012];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .007];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                if (diameter >= 2) {
                    var hss = [.015, .030];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.008, .020];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.006, .016];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.003, .012];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .004];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                if (diameter >= 2) {
                    var hss = [.012, .020];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.008, .015];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.005, .012];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.003, .010];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .004];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                if (diameter >= 2) {
                    var hss = [.008, .016];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.006, .012];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.004, .010];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .008];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .004];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                if (diameter >= 2) {
                    var hss = [.009, .018];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.008, .012];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.006, .010];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.003, .008];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .005];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                if (diameter >= 2) {
                    var hss = [.007, .015];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.006, .012];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.004, .010];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.003, .007];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .004];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                if (diameter >= 2) {
                    var hss = [.006, .012];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.004, .010];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .007];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .005];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .003];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                if (diameter >= 2) {
                    var hss = [.009, .018];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.008, .012];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.006, .010];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.003, .008];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .005];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                if (diameter >= 2) {
                    var hss = [.008, .018];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.005, .012];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .010];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .007];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .004];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                if (diameter >= 2) {
                    var hss = [.006, .016];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.004, .010];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .008];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .006];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .004];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                if (diameter >= 2) {
                    var hss = [.005, .010];
                    var carbide = [0, 0];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.004, .008];
                    var carbide = [0, 0];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .006];
                    var carbide = [0, 0];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .005];
                    var carbide = [0, 0];
                } else if (diameter < .5) {
                    var hss = [.001, .003];
                    var carbide = [0, 0];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    } else if (operation == "reaming") {
        switch (material) {
            case "aluminum":
                if (diameter >= 2) {
                    var hss = [.016, .035];
                    var carbide = [.016, .035];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.014, .028];
                    var carbide = [.014, .028];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.010, .020];
                    var carbide = [.010, .020];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.008, .018];
                    var carbide = [.008, .018];
                } else if (diameter < .5) {
                    var hss = [.006, .012];
                    var carbide = [.006, .012];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                if (diameter >= 2) {
                    var hss = [.016, .035];
                    var carbide = [.016, .035];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.014, .028];
                    var carbide = [.014, .028];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.010, .020];
                    var carbide = [.010, .020];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.008, .018];
                    var carbide = [.008, .018];
                } else if (diameter < .5) {
                    var hss = [.006, .012];
                    var carbide = [.006, .012];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                if (diameter >= 2) {
                    var hss = [.016, .035];
                    var carbide = [.016, .035];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.014, .028];
                    var carbide = [.014, .028];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.010, .020];
                    var carbide = [.010, .020];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.008, .018];
                    var carbide = [.008, .018];
                } else if (diameter < .5) {
                    var hss = [.006, .012];
                    var carbide = [.006, .012];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                if (diameter >= 2) {
                    var hss = [.012, .030];
                    var carbide = [.020, .030];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.010, .020];
                    var carbide = [.010, .020];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.008, .015];
                    var carbide = [.008, .015];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.006, .012];
                    var carbide = [.006, .012];
                } else if (diameter < .5) {
                    var hss = [.004, .008];
                    var carbide = [.004, .008];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                if (diameter >= 2) {
                    var hss = [.015, .035];
                    var carbide = [.015, .035];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.012, .025];
                    var carbide = [.012, .025];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.010, .020];
                    var carbide = [.010, .020];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.006, .015];
                    var carbide = [.006, .015];
                } else if (diameter < .5) {
                    var hss = [.005, .010];
                    var carbide = [.005, .010];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castHard":
                if (diameter >= 2) {
                    var hss = [.015, .030];
                    var carbide = [.015, .030];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.012, .020];
                    var carbide = [.012, .020];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.010, .018];
                    var carbide = [.010, .018];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.006, .016];
                    var carbide = [.006, .014];
                } else if (diameter < .5) {
                    var hss = [.005, .010];
                    var carbide = [.005, .010];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                if (diameter >= 2) {
                    var hss = [.012, .020];
                    var carbide = [.012, .020];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.009, .018];
                    var carbide = [.009, .018];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.007, .014];
                    var carbide = [.007, .014];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.005, .010];
                    var carbide = [.005, .010];
                } else if (diameter < .5) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                if (diameter >= 2) {
                    var hss = [.016, .035];
                    var carbide = [.016, .035];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.014, .028];
                    var carbide = [.014, .028];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.012, .024];
                    var carbide = [.012, .024];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.008, .016];
                    var carbide = [.008, .016];
                } else if (diameter < .5) {
                    var hss = [.005, .010];
                    var carbide = [.005, .010];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                if (diameter >= 2) {
                    var hss = [.016, .030];
                    var carbide = [.016, .030];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.012, .020];
                    var carbide = [.012, .020];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.010, .018];
                    var carbide = [.010, .018];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.006, .014];
                    var carbide = [.006, .014];
                } else if (diameter < .5) {
                    var hss = [.005, .008];
                    var carbide = [.004, .008];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                if (diameter >= 2) {
                    var hss = [.012, .025];
                    var carbide = [.012, .025];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.010, .018];
                    var carbide = [.010, .018];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.008, .016];
                    var carbide = [.008, .016];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.005, .012];
                    var carbide = [.005, .012];
                } else if (diameter < .5) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                if (diameter >= 2) {
                    var hss = [.010, .020];
                    var carbide = [.010, .020];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.008, .016];
                    var carbide = [.008, .016];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.006, .014];
                    var carbide = [.006, .014];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.004, .010];
                    var carbide = [.004, .010];
                } else if (diameter < .5) {
                    var hss = [.002, .004];
                    var carbide = [.002, .004];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    } else if (operation == "counter") {
        switch (material) {
            case "aluminum":
                if (diameter >= 2) {
                    var hss = [.008, .012];
                    var carbide = [.008, .012];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.006, .010];
                    var carbide = [.006, .010];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.005, .008];
                    var carbide = [.005, .008];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.004, .008];
                    var carbide = [.004, .008];
                } else if (diameter < .5) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "brass":
                if (diameter >= 2) {
                    var hss = [.008, .012];
                    var carbide = [.008, .012];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.006, .010];
                    var carbide = [.006, .010];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.005, .008];
                    var carbide = [.005, .008];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.004, .008];
                    var carbide = [.004, .008];
                } else if (diameter < .5) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronze":
                if (diameter >= 2) {
                    var hss = [.008, .012];
                    var carbide = [.008, .012];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.006, .010];
                    var carbide = [.006, .010];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.005, .008];
                    var carbide = [.005, .008];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.004, .008];
                    var carbide = [.004, .008];
                } else if (diameter < .5) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "bronzeHard":
                if (diameter >= 2) {
                    var hss = [.006, .010];
                    var carbide = [.006, .010];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.005, .008];
                    var carbide = [.005, .008];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.004, .006];
                    var carbide = [.004, .006];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.003, .005];
                    var carbide = [.003, .005];
                } else if (diameter < .5) {
                    var hss = [.002, .004];
                    var carbide = [.003, .005];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castSoft":
                if (diameter >= 2) {
                    var hss = [.008, .010];
                    var carbide = [.008, .010];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.006, .010];
                    var carbide = [.006, .010];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.004, .008];
                    var carbide = [.004, .008];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.004, .008];
                    var carbide = [.004, .008];
                } else if (diameter < .5) {
                    var hss = [.003, .006];
                    var carbide = [.004, .007];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
                break;
            case "castHard":
                if (diameter >= 2) {
                    var hss = [.006, .008];
                    var carbide = [.006, .008];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.004, .008];
                    var carbide = [.004, .008];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                } else if (diameter < .5) {
                    var hss = [.003, .006];
                    var carbide = [.004, .007];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "castChilled":
                if (diameter >= 2) {
                    var hss = [.004, .006];
                    var carbide = [.004, .006];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.003, .005];
                    var carbide = [.003, .005];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.002, .004];
                    var carbide = [.002, .004];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .004];
                    var carbide = [.002, .004];
                } else if (diameter < .5) {
                    var hss = [.002, .004];
                    var carbide = [.003, .006];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "mallIron":
                if (diameter >= 2) {
                    var hss = [.008, .010];
                    var carbide = [.008, .010];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.006, .010];
                    var carbide = [.006, .010];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.004, .008];
                    var carbide = [.004, .008];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.004, .008];
                    var carbide = [.004, .008];
                } else if (diameter < .5) {
                    var hss = [.003, .006];
                    var carbide = [.004, .007];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelSoft":
                if (diameter >= 2) {
                    var hss = [.005, .008];
                    var carbide = [.005, .008];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.004, .007];
                    var carbide = [.004, .007];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                } else if (diameter < .5) {
                    var hss = [.003, .006];
                    var carbide = [.003, .006];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelMedium":
                if (diameter >= 2) {
                    var hss = [.004, .006];
                    var carbide = [.004, .006];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.003, .005];
                    var carbide = [.003, .005];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.002, .004];
                    var carbide = [.002, .004];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.002, .004];
                    var carbide = [.002, .004];
                } else if (diameter < .5) {
                    var hss = [.002, .003];
                    var carbide = [.002, .003];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
            case "steelHard":
                if (diameter >= 2) {
                    var hss = [.003, .004];
                    var carbide = [.003, .004];
                } else if (diameter < 2 && diameter >= 1) {
                    var hss = [.002, .003];
                    var carbide = [.002, .003];
                } else if (diameter < 1 && diameter >= .75) {
                    var hss = [.001, .002];
                    var carbide = [.001, .002];
                } else if (diameter < .75 && diameter >= .5) {
                    var hss = [.001, .002];
                    var carbide = [.001, .002];
                } else if (diameter < .5) {
                    var hss = [.001, .002];
                    var carbide = [.001, .002];
                }
                return {
                    hss: hss,
                    carbide: carbide
                };
                break;
        }
    }
}