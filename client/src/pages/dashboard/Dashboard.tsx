// import dashboard components
import ValorantProfileOverview from "../../components/dashboard/ValorantProfileOverview";
import DailyShoutOut from "../../components/dashboard/DailyShoutOut";
import WeeklyHighlight from "../../components/dashboard/WeeklyHighlight";
import CustomSchedule from "../../components/dashboard/CustomSchedule";
import Profile from "../../components/dashboard/Profile";
import Friends from "../../components/dashboard/Friends";

export default function Dashboard() {
  return (
    <main className="min-h-screen flex">
      <section className="max-w-6xl mx-auto w-full min-h-screen bg-[#121212] py-12 px-15 space-y-10">
        <CustomSchedule />
        <div className="flex gap-15">
          <ValorantProfileOverview />
          <DailyShoutOut />
        </div>
        <WeeklyHighlight />
      </section>

      <section className="max-w-md mx-auto w-full min-h-screen bg-[#121212] py-12 pr-15 space-y-10">
        <Profile />
        <Friends />
      </section>
    </main>
  );
}
