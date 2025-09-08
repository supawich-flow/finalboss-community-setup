// import dashboard components
import ValorantProfileOverview from "../../features/dashboard/components/ValorantProfileOverview";
import DailyShoutOut from "../../features/dashboard/components/DailyShoutOut";
import WeeklyHighlight from "../../features/dashboard/components/WeeklyHighlight";
import CustomSchedule from "../../features/dashboard/components/CustomSchedule";
import Profile from "../../features/dashboard/components/Profile";
import Friends from "../../features/dashboard/components/Friends";

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
