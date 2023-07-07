interface SolutionResident {
  id: string;
  name: string;
  speciality: string;
}

/* *
 * Create Doctor type extends Resident type
 * Make speciality field in Doctor optional
 * Add experience field to Doctor type
 */

type SolutionDoctor = Partial<Pick<SolutionResident, "speciality">> &
  Omit<SolutionResident, "speciality"> & {
    experience: string;
  };

interface ISolutionDoctor
  extends Partial<Pick<SolutionResident, "speciality">>,
    Omit<SolutionResident, "speciality"> {
  experience: string;
}
