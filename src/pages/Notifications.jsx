import React, { useState } from 'react';
// Import your CSS file if you have specific styles for this page
// import './Notifications.css';

const Notifications = () => {
    // Example state for notification settings; this could be fetched from a server or local storage in a real app
    const [notifications, setNotifications] = useState({
        meals: true,
        napping: false,
        lightExposure: true
    });

    // Handler for toggling notifications
    const toggleNotification = (type) => {
        setNotifications({ ...notifications, [type]: !notifications[type] });
    };

    return (
        <div className="notifications">
            <h1>Notification Settings</h1>
            <p>Customize your notifications to stay on track with your jetlag management plan.</p>
            
            <div className="notification-settings">
                <div className="setting">
                    <label>
                        <input
                            type="checkbox"
                            checked={notifications.meals}
                            onChange={() => toggleNotification('meals')}
                        />
                        Meal Time Reminders
                    </label>
                </div>
                
                <div className="setting">
                    <label>
                        <input
                            type="checkbox"
                            checked={notifications.napping}
                            onChange={() => toggleNotification('napping')}
                        />
                        Napping Reminders
                    </label>
                </div>

                <div className="setting">
                    <label>
                        <input
                            type="checkbox"
                            checked={notifications.lightExposure}
                            onChange={() => toggleNotification('lightExposure')}
                        />
                        Light Exposure Reminders
                    </label>
                </div>

                {/* Add more notification settings as needed */}
            </div>
        </div>
    );
};

export default Notifications;
